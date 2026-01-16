import type { APIRoute } from "astro";

export const prerender = false;

const SCHEDULE_API_URL =
  "https://api.airtable.com/v0/app7aRJZSETQqVXx7/Timing?&view=Grid%20view";
const DAY_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type AirtableFields = {
  Name?: string;
  Level?: string;
  Day?: string;
  Timing?: string;
  Description?: string;
};

type AirtableRecord = {
  id: string;
  fields?: AirtableFields;
};

const hasAllLevels = (value?: string) =>
  Boolean(value && value.toLowerCase().includes("all"));

const normalizeDay = (day?: string) => {
  if (!day) return "Unscheduled";
  const trimmed = day.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

const orderIndex = (day: string) => {
  const index = DAY_ORDER.indexOf(day);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};

const withWeekdays = (days: { title: string; slots: { time: string }[] }[]) => {
  const existingTitles = new Set(days.map((day) => day.title));
  ["Monday", "Tuesday", "Wednesday"].forEach((day) => {
    if (!existingTitles.has(day)) {
      days.push({ title: day, slots: [] });
    }
  });
  return days;
};

export const GET: APIRoute = async () => {
  const airtableToken = import.meta.env.AIRTABLE_SCHEDULE_TOKEN;

  if (!airtableToken) {
    return new Response(
      JSON.stringify({
        error: "Missing Airtable token. Set AIRTABLE_SCHEDULE_TOKEN.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      },
    );
  }

  try {
    const response = await fetch(SCHEDULE_API_URL, {
      headers: {
        Authorization: `Bearer ${airtableToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Schedule fetch failed");
    }

    const data = await response.json();
    const airtableRecords: AirtableRecord[] = data.records ?? [];

    const scheduleSlots = airtableRecords
      .map((record) => {
        const fields = record.fields ?? {};
        const day = normalizeDay(fields.Day);
        const isAllLevel = hasAllLevels(fields.Level);
        const time =
          fields.Timing ||
          fields.Name ||
          fields.Description ||
          "Time to be confirmed";

        return { day, time, isAllLevel };
      })
      .filter((slot) => slot.day && slot.time && slot.isAllLevel);

    const scheduleDays = Array.from(
      scheduleSlots.reduce((map, slot) => {
        const existing = map.get(slot.day) ?? [];
        existing.push({ time: slot.time });
        map.set(slot.day, existing);
        return map;
      }, new Map<string, { time: string }[]>()),
    ).map(([title, slots]) => ({ title, slots }));

    const normalizedDays = withWeekdays(scheduleDays).sort(
      (a, b) => orderIndex(a.title) - orderIndex(b.title),
    );

    return new Response(JSON.stringify({ days: normalizedDays }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error in schedule API:", error);
    return new Response(
      JSON.stringify({ error: "Unable to load the latest schedule right now." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      },
    );
  }
};
