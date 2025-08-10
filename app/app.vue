<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>


<script setup lang="ts">
import { useCounterStore } from '../app/stores/counter'

const counter = useCounterStore()

counter.increment()
</script>
