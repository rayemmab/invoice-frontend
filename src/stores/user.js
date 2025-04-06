import { fetchData } from "./../utils/fech";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    user: {},
    loading: false,
  }),
  actions: {
    async get() {
      this.loading = true;
      try {
        const data = await fetchData("/users");

        this.users = data.data;
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        this.loading = false;
      }
    },

    async show(id) {
      this.loading = true;

      try {
        const data = await fetchData(`/users/${id}`);

        this.user = data.data;
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
