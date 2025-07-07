<template>
    <div class="flex-down">
        <div class="logo--text_container">
            <h1>{{ currentPageName }}</h1><h2>&pfeifer</h2>
        </div>
        <p>Ihre idee <span>&pfeifer</span></p>
    </div>
</template>
  
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

let currentPageName = computed(() => 'HOME') // default for prerender

if (typeof window !== 'undefined') {
  const route = useRoute()
  currentPageName = computed(() => {
    const path = route.path
    const slug = path.substring(1).split('/')[0]
    return slug ? slug.toUpperCase() : 'HOME'
  })
}
</script>
  
<style scoped>
.flex-down {
  display: flex;
  flex-direction: column;
}

.logo--text_container {
    display: flex;
    flex-direction: row;
    align-items: end;
    margin: 0px;
}

h1 {
    font-size: clamp(40px, 8vw, 95px); /* Responsive font size */
    font-family: 'gasoekOne';
    letter-spacing: 2px;
    margin: 0px;
    line-height: 1;
}

h2 {
    font-size: clamp(14px, 2vw, 22px); /* Responsive font size */
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    margin: 0px;
    padding: 0px;
}

p {
    font-family: 'Courier New', Courier, monospace;
    margin: 0px;
    padding: 0px;
}

span {
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
}

/* You can keep this media query for other adjustments if needed */
@media (max-width:1000px) {
    /* Add future adjustments here if necessary */
}
</style>
