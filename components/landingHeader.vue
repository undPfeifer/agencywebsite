<template>
    <main>
      <ContentList path="/" v-slot="{ list }">
        <div class="project--card_container">
            <div v-for="article in list" :key="article._path">
                <NuxtLink :to="`/${article.slug}`">
                    <div class="projectCard"> 
                        <img :src="article.thumbnail">
                        <div class="tag--container">
                            <p v-for="tag in article.tags" class="tag"> {{ tag }}</p>
                        </div> 
                        <h2> {{ article.title }} </h2>
                        <div class="hide--projekt-ansehen">
                            <img src="/assets/Arrow.svg" alt="" class="arrow">
                            <p class="projekt--ansehen">projekt ansehen</p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
      </ContentList>
    </main>
</template>

<style scoped> 
* {
    cursor: pointer;
}
a {
    all: unset;
    cursor: pointer !important;
}
img {
    width: 100%;
    aspect-ratio: 34/28;
    border-radius: 8px;
    object-fit: cover;
}
h2 { 
    margin: 0px;
    font-size: 24px;
}

p{ 
    margin: 0px;
    font-size: 14px;
}

.eyebrow {
    color: rgb(255, 106, 0);
    margin-bottom: -4px;
}

.projectCard {
    /* GSAP*/
    opacity: 0;
    position: relative;
    cursor: pointer !important;
    top: 40px;
    /* GSAP*/

    /* outline: 1px solid red; */
    background-color: rgb(255, 255, 255);
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0px 0px 16px 0px;
    border-radius: 8px;
    transition: 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.projectCard img{
    transition: 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.projectCard:hover img{
    border-radius: 16px;
    transform: scale(0.99);
}

.projectCard:hover .hide--projekt-ansehen{
    width: 200px;
}

.hide--projekt-ansehen{
    display: flex;
    width: 0px;
    overflow: hidden;
    transition: 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);
    white-space: nowrap;
    overflow-wrap: break-word;
    margin-top: 0px;
    padding: 0px;
    height: 20px;
}

.arrow {
    margin: 0px;
    width: 200px;
    object-fit: scale-down;
    height: auto;
}

.project--card_container{
    padding: 40px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    /*outline: 1px solid red;*/
    cursor: pointer !important;
}

.tag--container {
    display: flex;
    gap: 4px;    
    margin-bottom: 0px;       
}

.tag {
    font-size: 12px;
    background-color: rgb(223, 223, 223);
    padding: 4px 6px;
    color: white;
    border-radius: 8px;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.tag:hover{
    background-color: black;
    color: white;
    border-radius: 4px;
}

.projekt--ansehen{
    color:#4700FF;
}

@media (max-width:800px) {
    .project--card_container{
        padding: 40px 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }
}

@media (max-width:500px) {
    .project--card_container{
        padding: 40px 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
    }
}

@media (min-width:1600px) {
    .project--card_container{
        padding: 40px 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 12px;
    }
}
</style>

<script>
export default {
  async mounted() {
    // Only run GSAP on client side
    if (process.client) {
      try {
        // Dynamic import to avoid SSR issues
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        // Register plugin after import
        gsap.registerPlugin(ScrollTrigger)
        
        // Wait for next tick to ensure DOM is ready
        await this.$nextTick()
        
        const cards = document.querySelectorAll(".projectCard")
        cards.forEach((card, index) => {
          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              end: "bottom 90%",
              scrub: 0.5,
              // markers: true, 
            },
            y: -40,
            opacity: 1,
            ease: "power3.out",
          })
        })
      } catch (error) {
        console.error('Error loading GSAP:', error)
      }
    }
  },
}
</script>