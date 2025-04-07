<script setup>
import Table from "@/components/table.vue";

import { useInvoiceStore } from "@/stores/invoice";

const invoiceStore = useInvoiceStore();

invoiceStore.get();

const columns = [
  {
    key: "invoice_number",
    label: "N° facture",
  },
  {
    key: "total_amount",
    label: "Montant",
  },
  {
    key: "status",
    label: "Statut",
  },
  {
    key: "issue_date",
    label: "Création",
  },
];
</script>

<template>
  <Table :columns="columns" :data="invoiceStore.invoices" />
</template>
