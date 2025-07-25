// src/lib/supabase.js
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// --- !!! REPLACE WITH YOUR SUPABASE URL AND ANON KEY !!! ---
const supabaseUrl = 'https://ydcjqwlufmjzpwmeputr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkY2pxd2x1Zm1qenB3bWVwdXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NTQzMTIsImV4cCI6MjA2OTAzMDMxMn0.VPjLy-6lm1iENRDl5CJoIYqrbYS5RUpOPgZKKxaNbqI';
// ---------------------------------------------------------

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});