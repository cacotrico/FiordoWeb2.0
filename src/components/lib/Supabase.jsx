import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://vctltdhuiskueyxoksyx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjdGx0ZGh1aXNrdWV5eG9rc3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2ODQ1MTUsImV4cCI6MjAxMTI2MDUxNX0.4t1nROcWCJrJ8apCpzZbmRmAsXsksXZCA1vWQVHnbjM'
const supabase = createClient(
                supabaseUrl, 
                supabaseKey
                )

export default supabase;