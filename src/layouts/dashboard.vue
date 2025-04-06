<script>
export default {
  name: "Dashboard",
};
</script>

<template>
  <div>
    <div class="bg-white flex justify-between">
      <p>Systeme de gestion des factures</p>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
