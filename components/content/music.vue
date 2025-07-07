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
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  
  const player = ref()
  const isPlaying = ref(false)
  const src = ref('')
  const showMore = ref(false)
  
  // Get current route to determine which markdown file to load
  const route = useRoute()
  
  // Function to load content and update src
  const loadContent = async () => {
    const currentSlug = route.params.slug || route.path.replace('/', '') || 'index'
    
    // DEBUG: Log what we're looking for
    console.log('Current route:', route.path)
    console.log('Looking for slug:', currentSlug)
    
    let content = null
    try {
      // Try different query approaches
      console.log('Trying queryContent with articles directory...')
      const result1 = await queryContent('articles', currentSlug).findOne()
      console.log('Articles query result:', result1)
      
      console.log('Trying direct path query...')
      const result2 = await queryContent().where({ _path: `/articles/${currentSlug}` }).findOne()
      console.log('Direct path query result:', result2)
      
      console.log('Trying slug-based query...')
      const result3 = await queryContent().where({ slug: currentSlug }).findOne()
      console.log('Slug-based query result:', result3)
      
      // Use whichever one works
      content = result1 || result2 || result3
      console.log('Final content:', content)
      console.log('Song from content:', content?.song)
    } catch (error) {
      console.log(`Error querying content:`, error)
    }
    
    const newSrc = content?.song || '/25.06.16_elyssian.mp3'
    console.log('Final src:', newSrc)
    
    // If source changed, stop current player and create new one
    if (src.value !== newSrc) {
      if (player.value) {
        player.value.pause()
        player.value.src = ''
      }
      
      src.value = newSrc
      initializePlayer()
    }
  }
  
  // Initialize the audio player
  const initializePlayer = () => {
    if (!src.value) return
    
    player.value = new Audio(src.value)
    player.value.preload = 'auto'
    player.value.loop = true
    player.value.load()
    
    fetch(src.value)
    
    // Keep isPlaying state synced with actual audio
    player.value.addEventListener('play', () => {
      isPlaying.value = true
    })
    player.value.addEventListener('pause', () => {
      isPlaying.value = false
    })
    
    // Reset playing state when new audio loads
    isPlaying.value = false
  }
  
  // Watch for route changes
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
  
  <style scoped>
  section {
    position: fixed;
    bottom: 4px;
    left: 4px;
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
   
    align-items: center;
    line-height: 0px;
    cursor: pointer;
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