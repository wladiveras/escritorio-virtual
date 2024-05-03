import Auth from "~/layouts/auth.vue";
import type { IAuthState } from "~/types";

export const useAuthStore = defineStore("auth", {
  state: (): IAuthState => {
    return {
      isLoading: false,
      token: "",
      user: {
        id: "",
        name: "",
        email: "",
        email_verified: false,
        phone: "",
        document: "",
        avatar: "",
        is_logged: false,
      },
    };
  },
  actions: {
    getUserData() {
      const Auth = useSupabaseUser();
      if (!Auth) return "/login";

      const authValue = Auth.value; // Access the value of the computed property
      this.user.id = authValue?.id;
      this.user.name = authValue?.user_metadata.name;
      this.user.email = authValue?.user_metadata.email;
      this.user.email_verified = authValue?.user_metadata.email_verified;
      this.user.phone = authValue?.phone;
      this.user.document = authValue?.user_metadata.document;
      this.user.avatar = authValue?.user_metadata.avatar_url;
      this.user.is_logged = true;

      return "/dashboard";
    },
  },
});
