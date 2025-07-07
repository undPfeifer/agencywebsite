<script setup>
import { ref, onMounted, watch } from 'vue'
import { createClient } from '@supabase/supabase-js'

// Replace with your actual Supabase credentials

const supabaseUrl = 'https://kifdamniffzvjqrioqic.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZmRhbW5pZmZ6dmpxcmlvcWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NTQ5NTgsImV4cCI6MjA0OTQzMDk1OH0.v4_-ZDTWMgFpClLf7aEXO3KpqDfTjNFWuoFT4fijQIA';

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const player = ref()
const isPlaying = ref(false)
const src = ref('')
const showMore = ref(false)

const route = useRoute()

// Get public URL from Supabase bucket root
async function getSongUrlFromSupabase(songFileName) {
  // songFileName example: 'mytrack.mp3' - at root of the bucket
  const { data, error } = supabase.storage
    .from('undpfeifersound')
    .getPublicUrl(songFileName)

  if (error) {
    console.error('Supabase storage error:', error)
    return null
  }

  return data.publicUrl
}

const loadContent = async () => {
  const currentSlug = route.params.slug || route.path.replace('/', '') || 'index'

  let content = null
  try {
    const result1 = await queryContent('articles', currentSlug).findOne()
    const result2 = await queryContent().where({ _path: `/articles/${currentSlug}` }).findOne()
    const result3 = await queryContent().where({ slug: currentSlug }).findOne()

    content = result1 || result2 || result3

  } catch (error) {
    console.log('Error querying content:', error)
  }

  // song property should hold just the filename, e.g., 'track.mp3'
  const songFileName = content?.song || '25.06.16_elyssian.mp3'

  const publicUrl = await getSongUrlFromSupabase(songFileName)

  if (src.value !== publicUrl && publicUrl) {
    if (player.value) {
      player.value.pause()
      player.value.src = ''
    }
    src.value = publicUrl
    initializePlayer()
  }
}

const initializePlayer = () => {
  if (!src.value) return

  player.value = new Audio(src.value)
  player.value.preload = 'auto'
  player.value.loop = true
  player.value.load()

  fetch(src.value)

  player.value.addEventListener('play', () => {
    isPlaying.value = true
  })
  player.value.addEventListener('pause', () => {
    isPlaying.value = false
  })

  isPlaying.value = false
}

watch(() => route.path, () => {
  loadContent()
})

onMounted(() => {
  loadContent()
})

function play() {
  if (player.value) {
    player.value.play()
  }
}

function pause() {
  if (player.value) {
    player.value.pause()
  }
}
</script>
