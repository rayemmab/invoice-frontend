import { fetchData } from "./../utils/fech";
import { defineStore } from "pinia";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    currencies: [],
    currencyt: {},
    loading: false,
  }),
  actions: {
    async get() {
      this.loading = true;
      try {
        const data = await fetchData("/currencies");

        this.currencies = data.data;
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        this.loading = false;
      }
    },

    async show(id) {
      this.loading = true;

      try {
        const data = await fetchData(`/currencies/${id}`);

        this.currencyt = data.data;
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
