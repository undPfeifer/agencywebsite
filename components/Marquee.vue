<template>
    <div class="marquee">
      <div class="marquee__inner">
        <div v-for="person in people" :key="person.name" class="marquee__item">
          <h2>{{ person.text }}</h2>
        </div>
        <!-- Duplicate for seamless looping -->
        <div v-for="person in people" :key="person.name + '-clone'" class="marquee__item">
          <h2>{{ person.text }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const people = [
    {
      name: 'dimi',
      text: 'Dimitri Pfeifer | Grafik / Webdesign / HTML CSS JS VUE3 NUXT4 / WEBFLOW WORDPRESS SHOPIFY / 3D Design und Animation / Branding / Flyer / Logo / Plakate'
    }, /*
    {
      name: 'vivi',
      text: 'Viviane Ammann | Grafik / Branding / Animation 2D / Illustration / Editorial / Sunrise Salmon'
    },
    {
      name: 'julius',
      text: 'Marco Bosshard | Backoffice / Strategie / Office 365 / Röschti mit Bratwurst und Spiegelei'
    } */
  ]
  </script>
  
  <style scoped>
  .marquee {
    position: fixed;
    bottom: 0px;
    width: 100%;
    overflow: hidden;
    background: rgb(7, 255, 147);
    white-space: nowrap;
    padding: 1px;
  }
  
  .marquee__inner {
    display: inline-flex;
    animation: scroll 100s linear infinite;
  }
  
  .marquee__item {
    flex: none;
    padding: 0 4rem;
  }
  
  .marquee__item h2 {
    color: rgb(0, 0, 0);
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 2rem;
    margin: 0;
    text-transform: uppercase;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  </style>
  