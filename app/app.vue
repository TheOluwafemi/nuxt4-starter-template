<template>
  <div>
    <div class="bg-blue-950 text-7xl text-white">Welcome to Nuxt 4 Starter Template</div>

    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>


<script setup lang="ts">
import { useCounterStore } from '../app/stores/counter'

const counter = useCounterStore()

counter.increment()
</script>
