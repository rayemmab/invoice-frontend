import { fetchData } from "./../utils/fech";
import { defineStore } from "pinia";

export const useClientStore = defineStore("client", {
  state: () => ({
    clients: [],
    client: {},
    loading: false,
  }),
  actions: {
    async get() {
      this.loading = true;
      try {
        const data = await fetchData("/clients");

        this.clients = data.data;
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        this.loading = false;
      }
    },

    async show(id) {
      this.loading = true;

      try {
        const data = await fetchData(`/clients/${id}`);

        this.client = data.data;
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
