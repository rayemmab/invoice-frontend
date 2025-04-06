<script setup>
import Table from "@/components/table.vue";

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

userStore.get();

const columns = [
  {
    key: "name",
    label: "Nom",
  },
  {
    key: "email",
    label: "Adresse mail",
  },
  {
    key: "role",
    label: "Role",
  },
];
</script>

<template>
  <Table :columns="columns" :data="userStore.users" />
</template>
