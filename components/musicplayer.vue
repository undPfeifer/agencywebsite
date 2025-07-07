<template>
    <section>
      <div @mouseenter="showMore = true" @mouseleave="showMore = false">
        <button v-if="!isPlaying" @click="play"></button>
        <button v-else @click="pause">o</button>
        <NuxtLink to="https://undpfeifer.github.io/dedimispotify/" v-if="isPlaying && showMore">
          <h1>more</h1>
        </NuxtLink>
      </div>
    </section>
  </template>





<script setup>
import { ref, onMounted } from 'vue'

const player = ref()
const isPlaying = ref(false)
const src = ref('')
const showMore = ref(false)

const musicFiles = ref([])      // holds the playlist
const currentIndex = ref(0)     // current song index

// Utility: Shuffle an array (Fisher-Yates shuffle)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// Pick a random song index
function pickRandomIndex() {
  return Math.floor(Math.random() * musicFiles.value.length)
}

const loadMusicFiles = async () => {
  try {
    const res = await fetch('/api/music')
    if (!res.ok) throw new Error(`API error: ${res.status}`)

    const json = await res.json()
    musicFiles.value = shuffle(json.files || [])

    console.log('Randomized playlist:', musicFiles.value)

    if (musicFiles.value.length) {
      currentIndex.value = 0
      src.value = musicFiles.value[currentIndex.value]
      initializePlayer()
    }
  } catch (error) {
    console.error('Error fetching music files:', error)
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

  // Auto play next song when current ends
  player.value.addEventListener('ended', () => {
    playNext()
  })

  isPlaying.value = false
}

function play() {
  if (player.value) {
    // When resuming after pause, pick random song
    currentIndex.value = pickRandomIndex()
    console.log(`Resuming with random song:`, musicFiles.value[currentIndex.value])

    player.value.pause() // stop current audio
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
  console.log(`Playing next song:`, musicFiles.value[currentIndex.value])

  if (player.value) {
    player.value.pause()
    player.value.src = musicFiles.value[currentIndex.value]
    player.value.load()
    player.value.play()
  }
}

onMounted(() => {
  loadMusicFiles()
})
</script>




<style scoped>
  section {
    position: fixed;
    bottom: 4px;
    left: 4px;
    z-index: 100;
  }
  
  div {
    display: flex;
    gap: 6px;

  }
  
  h1 {
    font-family:'Courier New', Courier, monospace;
    font-size: 12px;
    letter-spacing: -0.2px;
    color: aliceblue;
    background-color: black;
    padding: 12px 4px 0px 4px;
    border-radius: 4px;
    font-weight: 100;
    height: 100%;
   
    align-items: center;
    line-height: 0px;
    cursor: pointer;
  }
  
  button {
    all: unset;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 40px;
    font-weight: bold;
    background-color: rgb(255, 0, 0);
    box-shadow: 1px 1px 0px black;
  }

  div:hover{
    opacity: .9;
  }
  </style>