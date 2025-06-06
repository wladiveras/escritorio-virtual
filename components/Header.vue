<script setup lang="ts">
const { t } = useI18n();

const nuxtApp = useNuxtApp();
const { activeHeadings, updateHeadings } = useScrollspy();

const name = ref("Escritório Virtual");

const links = computed(() => [
  {
    label: 'Dashboard',
    to: "Dashboard",
    icon: "i-heroicons-cube-transparent",
    active:
      activeHeadings.value.includes("features") &&
      !activeHeadings.value.includes("pricing"),
  },

  {
    label: t("header.recommendations"),
    to: "#testimonials",
    icon: "i-heroicons-academic-cap",
    active: activeHeadings.value.includes("testimonials"),
  },

  {
    label: t("header.faq"),
    to: "#faq",
    icon: "i-heroicons-question-mark-circle",
    active: activeHeadings.value.includes("faq"),
  },
]);

nuxtApp.hooks.hookOnce("page:finish", () => {
  updateHeadings([
    document.querySelector("#testimonials")!,
    document.querySelector("#faq")!,
  ]);
});

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const loading = ref(false);

const handleLogin = () => {
  navigateTo("/login");
};

const handleLogout = async () => {
  await supabase.auth.signOut().catch((error) => {
    return console.log(error);
  });
};
</script>

<template>
  <UHeader :links="links" class="lg:!border-transparent">
    <template #logo>
      <div v-motion-pop-visible class="flex">
        <img
          src="/favicon.png"
          width="18px"
          height="18px"
          class="relative mr-[5px]"
        />
        {{ name }}
      </div>
    </template>

    <template #right>
      <UTooltip
        text="Trocar Idioma"
        :popper="{ placement: 'bottom', arrow: true }"
      >
        <ToggleLocation size="sm" />
      </UTooltip>
      <UTooltip
        text="Trocar de tema"
        :popper="{ placement: 'bottom', arrow: true }"
      >
        <UColorModeButton size="sm" />
      </UTooltip>
      <div v-if="!user">
        <UButton
          :label="loading ? $t('header.sigin_loading') : $t('header.sigin')"
          color="white"
          :disabled="loading"
          variant="ghost"
          trailing-icon="i-heroicons-arrow-right-20-solid"
          class="hidden lg:flex"
          @click="handleLogin"
        />
      </div>

      <div v-else class="flex">
        <UTooltip
          text="Painel de Controle"
          :popper="{ placement: 'bottom', arrow: true }"
        >
          <UButton
            to="dashboard"
            color="white"
            :disabled="loading"
            variant="ghost"
            trailing-icon="mdi:view-dashboard-edit"
            class="hidden lg:flex"
          />
        </UTooltip>

        <UTooltip
          text="Sair da sua conta"
          :popper="{ placement: 'bottom', arrow: true, open: true }"
        >
          <UButton
            :label="
              loading ? $t('header.signout_loading') : $t('header.signout')
            "
            color="white"
            :disabled="loading"
            variant="ghost"
            trailing-icon="i-heroicons-arrow-left-20-solid"
            class="hidden lg:flex"
            @click="handleLogout"
          />
        </UTooltip>
      </div>
    </template>

    <template #panel>
      <div v-motion-pop-visible>
        <UAsideLinks :links="links" />

        <UDivider class="my-6" />

        <UButton
          v-if="!user"
          :label="t('header.sigin')"
          :disabled="loading"
          color="white"
          block
          class="mb-3"
          @click="handleLogin"
        >
          {{ loading ? t("header.sigin_loading") : t("header.sigin") }}
        </UButton>

        <UButton
          v-else
          :label="t('header.signout')"
          color="white"
          :disabled="loading"
          block
          class="mb-3"
          @click="handleLogout"
        >
          {{ loading ? t("header.signout_loading") : t("header.signout") }}
        </UButton>
      </div>
    </template>
  </UHeader>
</template>
