import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || 'https://qhzxhduqjxnhyilumrcy.supabase.co'
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoenhoZHVxanhuaHlpbHVtcmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTc5MzksImV4cCI6MjA1OTY3MzkzOX0.unaIkwS8rgtFx6UtBuBQgZ-0iUbYOykvbfrpDA_QsFA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// This file is used for Supabase CLI to generate types
// Run: npx supabase gen types typescript --project-id qhzxhduqjxnhyilumrcy > src/types/supabase.ts
