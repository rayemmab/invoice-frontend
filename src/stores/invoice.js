import { fetchData } from "./../utils/fech";
import { defineStore } from "pinia";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoices: [],
    invoice: {},
    loading: false,
  }),
  actions: {
    async get() {
      this.loading = true;
      try {
        const data = await fetchData("/invoices");

        this.invoices = data.data;
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        this.loading = false;
      }
    },

    async show(id) {
      this.loading = true;

      try {
        const data = await fetchData(`/invoices/${id}`);

        this.invoice = data.data;
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
