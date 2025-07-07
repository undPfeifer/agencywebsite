// server/api/music.ts

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kifdamniffzvjqrioqic.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZmRhbW5pZmZ6dmpxcmlvcWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NTQ5NTgsImV4cCI6MjA0OTQzMDk1OH0.v4_-ZDTWMgFpClLf7aEXO3KpqDfTjNFWuoFT4fijQIA'
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
