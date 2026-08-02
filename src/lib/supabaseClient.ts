import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase env vars. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ReviewEventType =
  | 'wedding'
  | 'baptism'
  | 'birthday'
  | 'anniversary'
  | 'private_party'
  | 'other';

export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Review {
  id: string;
  full_name: string;
  event_type: ReviewEventType;
  rating: number;
  message: string;
  photo_url: string | null;
  status: ReviewStatus;
  created_at: string;
  updated_at: string;
}

export interface NewReview {
  full_name: string;
  event_type: ReviewEventType;
  rating: number;
  message: string;
  photo_url?: string | null;
}

export const EVENT_TYPE_LABELS: Record<ReviewEventType, string> = {
  wedding: 'Nuntă',
  baptism: 'Botez',
  birthday: 'Zi de naștere',
  anniversary: 'Aniversare',
  private_party: 'Petrecere privată',
  other: 'Altele',
};
