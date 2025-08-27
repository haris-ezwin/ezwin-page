export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      concepts: {
        Row: {
          ai_description: string | null
          created_at: string
          description: string | null
          example: string | null
          id: number
          name: string | null
        }
        Insert: {
          ai_description?: string | null
          created_at?: string
          description?: string | null
          example?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          ai_description?: string | null
          created_at?: string
          description?: string | null
          example?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      exam_papers: {
        Row: {
          created_at: string | null
          difficulty: number | null
          exam_type: Database["public"]["Enums"]["exam_type"] | null
          id: string
          level: Database["public"]["Enums"]["level"] | null
          paper_url: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
          videos: Json | null
          worksheet_url: string | null
          year: number | null
        }
        Insert: {
          created_at?: string | null
          difficulty?: number | null
          exam_type?: Database["public"]["Enums"]["exam_type"] | null
          id?: string
          level?: Database["public"]["Enums"]["level"] | null
          paper_url?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
          videos?: Json | null
          worksheet_url?: string | null
          year?: number | null
        }
        Update: {
          created_at?: string | null
          difficulty?: number | null
          exam_type?: Database["public"]["Enums"]["exam_type"] | null
          id?: string
          level?: Database["public"]["Enums"]["level"] | null
          paper_url?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          videos?: Json | null
          worksheet_url?: string | null
          year?: number | null
        }
        Relationships: []
      }
      lessons: {
        Row: {
          created_at: string
          id: number
          kahoot_url: string | null
          level: Database["public"]["Enums"]["level"]
          name: string | null
          self_assigned_kahoot_url: string | null
          term: number | null
          video_recordings: Json | null
          week: number | null
          worksheets: Json | null
        }
        Insert: {
          created_at?: string
          id?: number
          kahoot_url?: string | null
          level: Database["public"]["Enums"]["level"]
          name?: string | null
          self_assigned_kahoot_url?: string | null
          term?: number | null
          video_recordings?: Json | null
          week?: number | null
          worksheets?: Json | null
        }
        Update: {
          created_at?: string
          id?: number
          kahoot_url?: string | null
          level?: Database["public"]["Enums"]["level"]
          name?: string | null
          self_assigned_kahoot_url?: string | null
          term?: number | null
          video_recordings?: Json | null
          week?: number | null
          worksheets?: Json | null
        }
        Relationships: []
      }
      notes: {
        Row: {
          explanation: string | null
          id: string
          tags: string[] | null
          title: string
        }
        Insert: {
          explanation?: string | null
          id?: string
          tags?: string[] | null
          title: string
        }
        Update: {
          explanation?: string | null
          id?: string
          tags?: string[] | null
          title?: string
        }
        Relationships: []
      }
      questions: {
        Row: {
          back_unit: string | null
          concept_ids: number[] | null
          content: string | null
          correct_answer: string | null
          created_at: string
          difficulty: number | null
          explanation: string | null
          front_unit: string | null
          id: string
          image_url: string | null
          level: Database["public"]["Enums"]["level"] | null
          metadata: Json | null
          note_ids: string[] | null
          tags: string[] | null
          topic_ids: number[] | null
          type: Database["public"]["Enums"]["question_type"] | null
          updated_at: string | null
        }
        Insert: {
          back_unit?: string | null
          concept_ids?: number[] | null
          content?: string | null
          correct_answer?: string | null
          created_at?: string
          difficulty?: number | null
          explanation?: string | null
          front_unit?: string | null
          id?: string
          image_url?: string | null
          level?: Database["public"]["Enums"]["level"] | null
          metadata?: Json | null
          note_ids?: string[] | null
          tags?: string[] | null
          topic_ids?: number[] | null
          type?: Database["public"]["Enums"]["question_type"] | null
          updated_at?: string | null
        }
        Update: {
          back_unit?: string | null
          concept_ids?: number[] | null
          content?: string | null
          correct_answer?: string | null
          created_at?: string
          difficulty?: number | null
          explanation?: string | null
          front_unit?: string | null
          id?: string
          image_url?: string | null
          level?: Database["public"]["Enums"]["level"] | null
          metadata?: Json | null
          note_ids?: string[] | null
          tags?: string[] | null
          topic_ids?: number[] | null
          type?: Database["public"]["Enums"]["question_type"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      syllabus: {
        Row: {
          id: number
          level: Database["public"]["Enums"]["level"] | null
          sub_strand: string | null
          sub_topic: string | null
          topic: string | null
        }
        Insert: {
          id: number
          level?: Database["public"]["Enums"]["level"] | null
          sub_strand?: string | null
          sub_topic?: string | null
          topic?: string | null
        }
        Update: {
          id?: number
          level?: Database["public"]["Enums"]["level"] | null
          sub_strand?: string | null
          sub_topic?: string | null
          topic?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          level: Database["public"]["Enums"]["level"] | null
          role: Database["public"]["Enums"]["role"] | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          level?: Database["public"]["Enums"]["level"] | null
          role?: Database["public"]["Enums"]["role"] | null
        }
        Update: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          level?: Database["public"]["Enums"]["level"] | null
          role?: Database["public"]["Enums"]["role"] | null
        }
        Relationships: []
      }
      worksheet_attempts: {
        Row: {
          answers: Json
          difficulty_rating: number | null
          email: string | null
          enriched_answers: Json | null
          id: string
          session_id: string | null
          student_name: string | null
          submitted_at: string
          time_taken: number | null
          user_id: string | null
          worksheet_id: string
        }
        Insert: {
          answers?: Json
          difficulty_rating?: number | null
          email?: string | null
          enriched_answers?: Json | null
          id?: string
          session_id?: string | null
          student_name?: string | null
          submitted_at?: string
          time_taken?: number | null
          user_id?: string | null
          worksheet_id: string
        }
        Update: {
          answers?: Json
          difficulty_rating?: number | null
          email?: string | null
          enriched_answers?: Json | null
          id?: string
          session_id?: string | null
          student_name?: string | null
          submitted_at?: string
          time_taken?: number | null
          user_id?: string | null
          worksheet_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "worksheet_attempts_worksheet_id_fkey"
            columns: ["worksheet_id"]
            isOneToOne: false
            referencedRelation: "worksheets"
            referencedColumns: ["id"]
          },
        ]
      }
      worksheets: {
        Row: {
          assigned_user_id: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          include_level_up: boolean | null
          latest_levelup_worksheet: boolean | null
          next_worksheet_id: string | null
          question_ids: string[] | null
          questions: Json | null
          tags: string[] | null
          title: string
          type: Database["public"]["Enums"]["worksheet_type"] | null
          updated_at: string | null
        }
        Insert: {
          assigned_user_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          include_level_up?: boolean | null
          latest_levelup_worksheet?: boolean | null
          next_worksheet_id?: string | null
          question_ids?: string[] | null
          questions?: Json | null
          tags?: string[] | null
          title: string
          type?: Database["public"]["Enums"]["worksheet_type"] | null
          updated_at?: string | null
        }
        Update: {
          assigned_user_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          include_level_up?: boolean | null
          latest_levelup_worksheet?: boolean | null
          next_worksheet_id?: string | null
          question_ids?: string[] | null
          questions?: Json | null
          tags?: string[] | null
          title?: string
          type?: Database["public"]["Enums"]["worksheet_type"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "worksheets_assigned_user_id_fkey"
            columns: ["assigned_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      accuracy_by_concept_with_worksheets: {
        Row: {
          accuracy_percentage: number | null
          concept_id: number | null
          concept_name: string | null
          correct_answers: number | null
          total_attempts: number | null
          user_id: string | null
          worksheets: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      accuracy_by_topic_with_worksheets: {
        Row: {
          accuracy_percentage: number | null
          correct_answers: number | null
          sub_topic_name: string | null
          topic_id: number | null
          topic_name: string | null
          total_attempts: number | null
          user_id: string | null
          worksheets: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      question_tags: {
        Row: {
          tag: string | null
        }
        Relationships: []
      }
      student_wrong_questions_stats: {
        Row: {
          first_attempt_at: string | null
          last_attempt_at: string | null
          last_correct_at: string | null
          last_student_answer: string | null
          last_wrong_at: string | null
          question_id: string | null
          question_text: string | null
          student_name: string | null
          times_corrected: number | null
          user_id: string | null
          wrong_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      worksheet_accounts_view: {
        Row: {
          session_id: string | null
          submitted_at: string | null
          user_id: string | null
          worksheet_attempts_id: string | null
          worksheet_id: string | null
          worksheet_title: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "worksheet_attempts_worksheet_id_fkey"
            columns: ["worksheet_id"]
            isOneToOne: false
            referencedRelation: "worksheets"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      exam_type: "wa1" | "wa2" | "wa3" | "eoy"
      level: "p1" | "p2" | "p3" | "p4" | "p5" | "p6"
      question_type: "short_answer" | "box_grid" | "line_grid"
      role: "student" | "admin"
      worksheet_type: "manual" | "levelup"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      exam_type: ["wa1", "wa2", "wa3", "eoy"],
      level: ["p1", "p2", "p3", "p4", "p5", "p6"],
      question_type: ["short_answer", "box_grid", "line_grid"],
      role: ["student", "admin"],
      worksheet_type: ["manual", "levelup"],
    },
  },
} as const
