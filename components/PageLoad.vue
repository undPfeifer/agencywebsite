<template>
    <section v-if="visible" class="page--load">
        <img src="/img/astronaut-fish-animation.gif" alt="">
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const visible = ref(true)
  
  onMounted(() => {
    // simple delay so it actually shows during hydration
    setTimeout(() => {
      visible.value = false
    }, 1200) // you can tweak duration
  })
  </script>
  
  <style scoped>
  section {
    background: white;
    position: fixed;
    inset: 0; /* shorthand for left:0, top:0, width:100%, height:100% */
    z-index: 99999999;
  
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  