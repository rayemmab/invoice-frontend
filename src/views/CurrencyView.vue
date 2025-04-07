<script setup>
import Table from "@/components/table.vue";

import { useCurrencyStore } from "@/stores/currency";

const currencyStore = useCurrencyStore();

currencyStore.get();

const columns = [
  {
    key: "name",
    label: "Nom",
  },
  {
    key: "code",
    label: "Code",
  },
  {
    key: "symbol",
    label: "Symbole",
  },
  {
    key: "is_default",
    label: "Par defaut",
  },
];
</script>

<template>
  <Table :columns="columns" :data="currencyStore.currencies">
    <template #is_default="{ row }">
      <strong>{{ row.is_default ? 'Oui' : 'Non' }}</strong>
    </template>
  </Table>
</template>
