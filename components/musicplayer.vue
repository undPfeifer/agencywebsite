<script>
import { ref, reactive, onMounted, watch } from 'vue'
import { createClient } from '@supabase/supabase-js'

export default {
  name: 'RandomPlayer',
  setup() {
    // Replace with your actual Supabase info
    const supabaseUrl = 'https://kifdamniffzvjqrioqic.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZmRhbW5pZmZ6dmpxcmlvcWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NTQ5NTgsImV4cCI6MjA0OTQzMDk1OH0.v4_-ZDTWMgFpClLf7aEXO3KpqDfTjNFWuoFT4fijQIA';
                // replace this
const bucketName = 'music' 

    const supabase = createClient(supabaseUrl, supabaseKey)

    const files = ref([])          // list of files (song names)
    const isPlaying = ref(false)   // playing state
    const showMore = ref(false)    // hover state for "more"
    const currentIndex = ref(-1)   // current song index
    const audio = ref(null)        // Audio object

    // Fetch files from Supabase bucket
    async function fetchFiles() {
      const { data, error } = await supabase.storage.from(bucketName).list()
      if (error) {
        console.error('Error fetching files:', error)
        return
      }
      // Filter to audio files (optional, assuming mp3 or similar)
      files.value = data.filter(f => /\.(mp3|wav|ogg|m4a)$/i.test(f.name))
    }

    // Shuffle helper
    function shuffleArray(arr) {
      let array = arr.slice()
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    }

    // Play song at given index
    async function playSong(index) {
      if (!files.value.length) return
      if (audio.value) {
        audio.value.pause()
        audio.value = null
      }
      currentIndex.value = index
      const fileName = files.value[index].name
      // Get public URL for file
      const { data: urlData, error } = supabase.storage.from(bucketName).getPublicUrl(fileName)
      if (error) {
        console.error('Error getting file URL:', error)
        return
      }
      audio.value = new Audio(urlData.publicUrl)
      audio.value.play()
      isPlaying.value = true

      // When song ends, play next random song
      audio.value.onended = () => {
        playNextRandom()
      }
    }

    // Play next random song different from current
    function playNextRandom() {
      if (!files.value.length) return
      let nextIndex
      do {
        nextIndex = Math.floor(Math.random() * files.value.length)
      } while (nextIndex === currentIndex.value && files.value.length > 1)
      playSong(nextIndex)
    }

    // Play / pause toggle logic
    function play() {
  // Always play a new random song when play clicked
  playNextRandom()
}


    function pause() {
      if (audio.value) {
        audio.value.pause()
        isPlaying.value = false
      }
    }

    // On mounted, fetch files
    onMounted(() => {
      fetchFiles()
    })

    return {
      files,
      isPlaying,
      showMore,
      play,
      pause,
    }
  },
}
</script>

<template>
  <section>
    <div @mouseenter="showMore = true" @mouseleave="showMore = false">
      <button v-if="!isPlaying" @click="play">I</button>
      <button v-else @click="pause">o</button>
      <NuxtLink to="/about" v-if="isPlaying && showMore">
        <h1>more</h1>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
section {
  position: fixed;
  bottom: 4px;
  left: 4px;
  z-index: 10000;
}

div {
  display: flex;
  gap: 6px;
}

h1 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 12px;
  letter-spacing: -0.2px;
  color: aliceblue;
  background-color: black;
  padding: 12px 4px 0px 4px;
  border-radius: 4px;
  font-weight: 100;

  align-items: center;
  line-height: 0px;
  cursor: pointer;
  height: 100%;
}

button {
  all: unset;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  background-color: white;
  box-shadow: 1px 1px 0px black;
}
</style>
