<template>
  <section 
      class="navbar--container" 
      ref="navbar"
      :class="{ 'navbar--scrolled': isScrolledDown }"
  > 
      <a href="/"> <logo /></a>
      <div class="nav--text_container">
          <a href="/">home</a>
          <a href="/team">about</a> 
          <a>kontakt</a>
      </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navbar = ref(null)
const isScrolledDown = ref(false)
let lastScrollY = 0
let ticking = false

// Throttled scroll handler for better performance
const handleScroll = () => {
  if (!ticking) {
      requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const isMobile = window.innerWidth <= 620
          
          if (isMobile) {
              if (currentScrollY > lastScrollY && currentScrollY > 50) {
                  // Scrolling down and past threshold (mobile only)
                  isScrolledDown.value = true
                  console.log('Scrolling down - navbar hidden')
              } else if (currentScrollY < lastScrollY) {
                  // Scrolling up (mobile only)
                  isScrolledDown.value = false
                  console.log('Scrolling up - navbar visible')
              }
          } else {
              // Always show navbar on desktop
              isScrolledDown.value = false
          }
          
          lastScrollY = currentScrollY
          ticking = false
      })
      ticking = true
  }
}

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Handle resize events to reset navbar state
  window.addEventListener('resize', () => {
      if (window.innerWidth > 620) {
          isScrolledDown.value = false
      }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<style scoped>
* {
  margin: 0px;
}

a {
  color: black;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
}

a:visited {
  font-weight: bold;
}

.navbar--container {
  display: flex;
  align-items: end;
  justify-content: space-between;
  
  position: sticky;
  left: 0px;
  top: 0px;

  z-index: 900;

  height: auto;
  width: 100%;
  gap: 8px;
  background-color: rgb(255, 255, 255);
  padding: 12px 40px 12px 20px;
  
  /* Smooth transitions using transform for better performance */
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hide navbar when scrolling down (only on mobile) */
@media (max-width: 680px) {
  .navbar--scrolled {
      transform: translateY(-100%);
  }
}

/* On desktop, navbar always stays visible */
@media (min-width: 681px) {
  .navbar--scrolled {
      transform: translateY(0);
  }
}

/* Alternative: Compact navbar instead of hiding */
.navbar--compact {
  height: 60px;
  padding: 8px 40px 8px 20px;
}

.nav--text_container {
  display: flex;
  gap: 10px;
}

@media (max-width: 700px) {
  h1 {
      font-size: 12px;
  }

  .nav--text_container {
      display: none;
  }
  
  .navbar--container {
      padding: 12px 20px 12px 15px;
  }
}

/* Optional: Add subtle shadow when scrolled */
.navbar--scrolled {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>