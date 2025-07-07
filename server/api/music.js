<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

// --- Supabase setup (replace with your project info) ---
const supabaseUrl = 'https://kifdamniffzvjqrioqic.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZmRhbW5pZmZ6dmpxcmlvcWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NTQ5NTgsImV4cCI6MjA0OTQzMDk1OH0.v4_-ZDTWMgFpClLf7aEXO3KpqDfTjNFWuoFT4fijQIA'
const supabase = createClient(supabaseUrl, supabaseKey)

const player = ref()
const isPlaying = ref(false)
const src = ref('')
const showMore = ref(false)

const musicFiles = ref([])
const currentIndex = ref(0)

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const loadMusicFiles = async () => {
  try {
    const { data, error } = await supabase.storage
      .from('agencymusic')
      .list('', { limit: 100 })

    if (error) throw error

    musicFiles.value = shuffle(
      data
        .filter(file => file.name.endsWith('.mp3'))
        .map(file => `${supabaseUrl}/storage/v1/object/public/music/${file.name}`)
    )

    console.log('Playlist from Supabase:', musicFiles.value)

    if (musicFiles.value.length) {
      currentIndex.value = 0
      src.value = musicFiles.value[currentIndex.value]
      initializePlayer()
    }
  } catch (err) {
    console.error('Failed to fetch music files:', err)
  }
}

const initializePlayer = () => {
  if (!src.value) return

  player.value = new Audio(src.value)
  player.value.preload = 'auto'
  player.value.load()

  player.value.addEventListener('play', () => {
    isPlaying.value = true
  })
  player.value.addEventListener('pause', () => {
    isPlaying.value = false
  })

  player.value.addEventListener('ended', () => {
    playNext()
  })

  isPlaying.value = false
}

function play() {
  if (player.value) {
    // Play a new random song every time play is pressed
    currentIndex.value = Math.floor(Math.random() * musicFiles.value.length)
    player.value.pause()
    player.value.src = musicFiles.value[currentIndex.value]
    player.value.load()
    player.value.play()
  }
}

function pause() {
  if (player.value) {
    player.value.pause()
  }
}

function playNext() {
  currentIndex.value = (currentIndex.value + 1) % musicFiles.value.length
  player.value.pause()
  player.value.src = musicFiles.value[currentIndex.value]
  player.value.load()
  player.value.play()
}

onMounted(() => {
  loadMusicFiles()
})
</script>
