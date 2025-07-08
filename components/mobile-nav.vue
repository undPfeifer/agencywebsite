<template>
    <nav>
        <div> 
            <NuxtLink to="/" class="nav-link">home</NuxtLink>
            <NuxtLink to="/team" class="nav-link">team</NuxtLink>
            <NuxtLink to="/kontakt" class="nav-link">kontakt</NuxtLink>

            <a @click="scrollToTop" class="toparrow"> 
                <img src="/assets/scroll-to-top.svg" alt="" class="toparrow">
            </a>
            
        </div>

    </nav>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
* {
    font-size: clamp(2vw, 12px, 16px);
    color: rgb(139, 139, 139);
}

nav {
    position: fixed;
    bottom: 0px;

    background-color: rgba(153, 153, 153, 0);

    width: 100%;
    display: flex;
    gap: 0px;

    align-items: center;
    justify-content: center;

    padding: 8px 20px 8px 20px;

    overflow-x: hidden; /* prevent horizontal scrolling */
}

a {
    all: unset;

    font-weight: 600;
    border-radius: 80px;

    cursor: pointer;
    width: 100%;
    padding: 12px 20px;
    background-color: rgb(37, 37, 37);
    display: flex;
    justify-content: center;
    align-items: center;

    height: 20px;
    flex: 0 0 auto; /* don't shrink scroll-to-top button */
}

a:hover {
    color: white;
    background-color: rgb(52, 52, 52);
}

.nav-link {
    flex: 1 1 0; /* allow links to shrink evenly */
    min-width: 0; /* prevent min-content overflow */
    text-align: center;
}

div {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    background-color: rgb(0, 0, 0);
    padding: 8px;
    border-radius: 40px;
    width: 100%;
    height: 60px;
    overflow: hidden; /* prevent internal overflow */
}

.toparrow{
    width: 20px !important;
}

@media (min-width: 700px) {
    nav {
        display: none;
    }
}


</style>