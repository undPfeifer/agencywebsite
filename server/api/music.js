import { readdirSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(() => {
  const musicDir = join(process.cwd(), 'public/music')
  const files = readdirSync(musicDir)
    .filter(file => file.endsWith('.mp3'))
    .map(file => `/music/${file}`)

  return { files }
})