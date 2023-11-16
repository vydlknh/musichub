import { createClient } from '@supabase/supabase-js'

const URL = "https://piezcmmebpqveierwbwa.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZXpjbW1lYnBxdmVpZXJ3YndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMjI0NTcsImV4cCI6MjAxNDY5ODQ1N30.C9OYIv6y5So9G9ttK9nYb1zp54yN_YNmN_ufDIfxskU"

export const supabase = createClient(URL, API_KEY);