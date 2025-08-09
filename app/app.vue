<template>
  <div>
    <div class="bg-blue-950 text-7xl text-white">Wwlcome to Nuxt 4 Starter Template</div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script lang="ts" setup>
const a = 1

const gh = (a) => {
  console.log(a)
}
</script>
