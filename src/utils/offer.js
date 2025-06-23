const offers = [
  {
    startDate: "2024-01-01",
    endDate: "2025-09-30",
    text: "2025 Offer: 1 Year Free Online Lessons for P6 PSLE Math",
    url: "https://ez1.sg/free-trial-p6"
  },
  {
    startDate: "2024-01-01",
    endDate: "2025-09-30",
    text: "1 Month Free Trial Online Lessons for P4/P5 Math",
    url: "https://ez1.sg/free-trial"
  }
];

export const isOfferActive = (offer) => {
  const now = new Date();
  const startDate = new Date(offer.startDate);
  const endDate = new Date(offer.endDate);
  endDate.setHours(23, 59, 59, 999);
  return now >= startDate && now <= endDate;
};

export const getCurrentOffer = () => {
  // .find() returns only the first matching element
  // To get all active offers, use .filter() instead
  return offers.filter(isOfferActive) || [];
};
