
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sopzzmiajaymqxrtxmrv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvcHp6bWlhamF5bXF4cnR4bXJ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjQ1MTU3MCwiZXhwIjoyMDA4MDI3NTcwfQ.M6e11zM4JsJoTaIBj9d6pNittm5I5Rn8C3bBgDieM6k'
const supabase = createClient(supabaseUrl, supabaseKey);

export {supabase};