# Supabase Integration for Exam Papers

This document explains how the exam papers feature is integrated with Supabase.

## Overview

The exam papers component now fetches data from a Supabase database instead of using static data. This allows for dynamic content management without requiring code changes.

## Database Schema

The `exam_papers` table in Supabase has the following structure:

- `id` (uuid): Primary key
- `title` (text): Exam paper title (format: "2024 P4 WA3 School Name")
- `paper_url` (text): Download link for the exam paper
- `videos` (text[]): Array of video explanation URLs
- `worksheet_url` (text): Link to online worksheet (optional)
- `level` (enum): Primary level (p4, p5, p6)
- `exam_type` (enum): Exam type (wa1, wa2, wa3, eoy)
- `year` (integer): Year of the exam
- `difficulty` (integer): Difficulty rating (1-5)
- `created_at` (timestamp): Creation timestamp
- `updated_at` (timestamp): Last update timestamp

## Configuration

The Supabase connection is configured in `src/utils/supabase.js`:

- **URL**: `https://qhzxhduqjxnhyilumrcy.supabase.co`
- **Anonymous Key**: Configured for public read access

Environment variables can be set for production:
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

## Security

- RLS (Row Level Security) is enabled on the `exam_papers` table
- Anonymous users can read exam papers via the policy: "Allow anonymous users to read exam papers"
- Authenticated users have full CRUD access

## Data Transformation

The Supabase data is transformed to match the expected interface:

```javascript
{
  title: paper.title,
  description: '', // Not available in DB
  imageUrl: '', // Not available in DB
  downloadUrl: paper.paper_url,
  videoExplanationUrl: paper.videos[0], // First video if available
  level: `Primary ${paper.level.charAt(1)}`, // Convert p4 -> Primary 4
  type: paper.exam_type.toUpperCase(), // Convert wa3 -> WA3
  school: extractedFromTitle, // Extracted from title
  year: paper.year.toString(),
  subject: 'Mathematics', // Default value
  worksheetUrl: paper.worksheet_url
}
```

## Fallback Mechanism

If Supabase data cannot be fetched, the system falls back to the original static data in `src/utils/exam-paper.js`.

## Adding New Exam Papers

To add new exam papers:

1. Go to your Supabase dashboard
2. Navigate to the `exam_papers` table
3. Insert a new row with the required fields
4. The exam papers will automatically appear on the website

## School Name Extraction

School names are automatically extracted from the title using the format "YYYY PX WAX School Name". The system takes everything after the first three parts as the school name.

## Video Explanations

Multiple video URLs can be stored in the `videos` array. Currently, only the first video is displayed in the UI.
