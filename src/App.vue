<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen bg-white">
    <component :is="$route.meta.layout || 'div'">
      <RouterView />
    </component>
  </div>
</template>
