import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://qhzxhduqjxnhyilumrcy.supabase.co'
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoenhoZHVxanhuaHlpbHVtcmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTc5MzksImV4cCI6MjA1OTY3MzkzOX0.unaIkwS8rgtFx6UtBuBQgZ-0iUbYOykvbfrpDA_QsFA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Function to fetch exam papers from Supabase
export async function getExamPapers() {
  try {
    const { data, error } = await supabase
      .from('exam_papers')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching exam papers:', error)
      return []
    }

    if (!data || data.length === 0) {
      console.log('No exam papers found in database')
      return []
    }

    // Transform the data to match the expected interface
    return data.map(paper => {
      // Extract school name from title (format: "2024 P4 WA3 School Name")
      const titleParts = paper.title.split(' ');
      const schoolName = titleParts.length > 3 ? titleParts.slice(3).join(' ') : '';

      return {
        title: paper.title,
        description: '', // Not available in current DB schema
        imageUrl: '', // Not available in current DB schema
        downloadUrl: paper.paper_url || '',
        videoExplanationUrl: paper.videos && paper.videos.length > 0 ? paper.videos[0] : '',
        level: paper.level ? `Primary ${paper.level.charAt(1)}` : '',
        type: paper.exam_type ? paper.exam_type.toUpperCase() : '',
        school: schoolName,
        year: paper.year ? paper.year.toString() : '',
        subject: 'Mathematics', // Default since not in DB
        worksheetUrl: paper.worksheet_url || '',
        difficulty: paper.difficulty || 3 // Default to 3 if not set
      };
    })
  } catch (error) {
    console.error('Error in getExamPapers:', error)
    return []
  }
}
