<template>
  <main>
    <landingHeader />
    <ContentList path="/" v-slot="{ list }">
     

      <div class="project--card_container">

        <div v-for="article in list" :key="article._path">
          <NuxtLink :to="`/${article.slug}`">
          </NuxtLink>
        </div>
      </div>
    </ContentList>
  </main>
</template>

