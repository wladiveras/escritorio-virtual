import type { IAuthState } from "~/types";

export const useAuthStore = defineStore("auth", {
  state: (): IAuthState => {
    return {
      isLoading: false,
      token: "",
      user: {
        id: 0,
        name: "",
        email: "",
        phone: "",
        document: "",
      },
    };
  },
  actions: {
    Authenticator(email: string, password: string) {
      this.user.email = email;
      this.user.phone = password;
    },
  },
});
