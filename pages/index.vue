<template>
    <main>
      <landingHeader />
      <ContentList path="/" v-slot="{ list }">
       

        <div class="project--card_container">
          <h1>ihr projekt &pfeifer</h1>

          <div v-for="article in list" :key="article._path">
            <NuxtLink :to="`/${article.slug}`">
              <!-- Your existing card content -->
            </NuxtLink>
          </div>
        </div>
      </ContentList>
    </main>
  </template>


