<script setup lang="ts">
  import { Analytics } from '@vercel/analytics/nuxt'
  import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  
    <navbar />

  <NuxtPage /> 

  <musicplayer />

  <mobile-nav />
  <impressum />

  <Analytics />

  <SpeedInsights /> 
  
</template>

<style>


a{
  text-decoration: none;
    color: inherit;
    cursor: pointer !important;
}

  /* Typography */
  @font-face {
    font-family: 'gasoekOne';
    src: url("GasoekOne-Regular.ttf");
  }

  /* General / Base Styles */

* {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  margin: 0px;

  box-sizing: border-box;
  object-fit: cover;

}



body {
    padding: 0px;
    margin: 0px;
  }

  section {
    padding: 0px;
  }

  a {
    font-weight: 600;
  }

  h1 {
    font-size: 64px;
    letter-spacing: -2px;
  }



  /* Project */


img {
  border-radius: 20px;
}

img > img {
  height: 10px;
}

img + .blogimg {
    height: 100px;
    
}

</style>


