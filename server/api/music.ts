// server/api/music.ts

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kifdamniffzvjqrioqic.supabase.co'
const supabaseKey = 'YOUR_SUPABASE_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default defineEventHandler(async () => {
  const { data, error } = await supabase.storage
    .from('agencymusic')
    .list('', { limit: 100 })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  const files = data
    .filter(file => file.name.endsWith('.mp3'))
    .map(file => `${supabaseUrl}/storage/v1/object/public/agencymusic/${file.name}`)

  return { files }
})
