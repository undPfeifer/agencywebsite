<template>
    <div class="grid-container">
      <img :src="src1" :alt="alt1">
      <img :src="src2" :alt="alt2">
    </div>
  </template>
  
  <script setup>
  defineProps({
    src1: { type: String, required: true },
    alt1: { type: String, default: '' },
    src2: { type: String, required: true },
    alt2: { type: String, default: '' }
  })
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  img {
    max-width: 100%;
    max-height: 85vh;
    width: auto;
    height: auto;
    margin-top: -40px;
  }
  
  @media (max-width: 700px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  
    img {
      min-height: 300px;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  </style>
  