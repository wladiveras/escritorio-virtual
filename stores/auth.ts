import type { IAuthState } from "~/types";
const user = useSupabaseUser();

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
      },
    };
  },
  actions: {
    loadUserData() {
      if (!user) return;

      this.user.id = user?.id;
      this.user.name = user?.user_metadata?.name;
      this.user.email = user?.user_metadata?.email;
      this.user.email_verified = user?.user_metadata?.email_verified;
      this.user.phone = user?.phone;
      this.user.document = user?.user_metadata?.document;
      this.user.avatar = user?.user_metadata?.avatar_url;
    },
  },
});
