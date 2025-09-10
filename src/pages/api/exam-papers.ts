import type { APIRoute } from 'astro'
import { getExamPapers } from '../../utils/supabase'

export const GET: APIRoute = async () => {
  try {
    const examPapers = await getExamPapers()

    return new Response(JSON.stringify(examPapers), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      }
    })
  } catch (error) {
    console.error('Error in exam-papers API:', error)

    return new Response(JSON.stringify({ error: 'Failed to fetch exam papers' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
