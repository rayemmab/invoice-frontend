<script setup>
import Table from "@/components/table.vue";

import { useClientStore } from "@/stores/client";

const clientStore = useClientStore();

clientStore.get();

const columns = [
  {
    key: "name",
    label: "Nom",
  },
  {
    key: "phone",
    label: "Phone",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "country",
    label: "Pays",
  },
];
</script>

<template>
  <Table :columns="columns" :data="clientStore.clients"> </Table>
</template>
