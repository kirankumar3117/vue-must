import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://lesozqiiufzowpwinuop.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxlc296cWlpdWZ6b3dwd2ludW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NTQ4MzgsImV4cCI6MjA0NjEzMDgzOH0.EHNZDkQiQQG8Pwnl6KSc04WJfnOxXAnljldd741IUqc')
