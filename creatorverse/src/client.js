import { createClient } from '@supabase/supabase-js';

const URL = 'https://gqhciceusxuiyjfwgdoi.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxaGNpY2V1c3h1aXlqZndnZG9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5MDM1ODgsImV4cCI6MjAzNjQ3OTU4OH0.8_HvZPLCLd4FS8RnlJ8mJTBP88QC2_g_Awwld05K4-8';
export const supabase = createClient(URL, API_KEY);