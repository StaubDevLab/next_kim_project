import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://ujpadfcfmysbpqeiggpg.supabase.co', process.env.NEXT_PUBLIC_SUPABASE_API_KEY ||'')

export default supabase;