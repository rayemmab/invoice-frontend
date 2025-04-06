<script>
export default {
  name: "Dashboard",
};
</script>

<script setup>
import { dashboardMenu } from "@/utils/menu";
</script>

<template>
  <div class="px-4">
    <div class="flex justify-between py-4 bg-white">
      <p class="uppercase">Systeme de gestion des factures</p>

      <nav class="flex gap-2">
        <RouterLink
          v-for="link in dashboardMenu"
          activeClass="border-indigo-500"
          :to="link.link"
          >{{ link.name }}</RouterLink
        >
      </nav>

      <div>Changer de langue</div>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
