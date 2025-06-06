<script setup lang="ts">
const appConfig = useAppConfig();
const { isHelpSlideoverOpen } = useDashboard();
const { t } = useI18n();

const user = useSupabaseUser();
const isLoading = ref(true);

const Auth = useAuthStore();

onMounted(() => {
  Auth.getUserData();
  isLoading.value = false;
});

const links = reactive([
  {
    id: "Dashboard",
    label: "Dashboard",
    icon: "i-heroicons-home",
    to: "/dashboard",
    tooltip: {
      text: t("dashboard.layout.links.home"),
      shortcuts: ["G", "H"],
    },
  },
  {
    id: "Produtos",
    label: "Vendas",
    icon: "iconoir:home-sale",
    to: "/Products",
    tooltip: {
      text: t("dashboard.layout.links.users"),
      shortcuts: ["G", "O"],
    },
  },
  {
    id: "afiliate",
    label: "Afiliados",
    icon: "i-heroicons-user-group",
    to: "/dashboard/users/sent",
    tooltip: {
      text: t("dashboard.layout.links.users"),
      shortcuts: ["G", "U"],
    },
    children: [
      {
        label: "Solicitações enviadas",
        to: "/dashboard/users/sent",
        exact: true,
      },
      {
        label: "Solicitações recebidas",
        to: "/dashboard/users/received",
      },
    ],
  },
  {
    id: "",
    label: "Logistica",
    icon: "i-heroicons-user-group",
    to: "/shipping",
    tooltip: {
      text: t("dashboard.layout.links.users"),
      shortcuts: ["G", "U"],
    },
    children: [
      {
        label: "Frete",
        to: "/dashboard/shipping",
        exact: true,
      },
      {
        label: "Produtos",
        to: "/dashboard/products",
      },
    ],
  },
  {
    id: "settings",
    label: t("dashboard.layout.links.settings"),
    to: "/dashboard/settings",
    icon: "i-heroicons-cog-8-tooth",
    tooltip: {
      text: t("dashboard.layout.links.settings"),
      shortcuts: ["G", "S"],
    },
    children: [
      {
        label: t("dashboard.layout.links.general"),
        to: "/dashboard/settings",
        exact: true,
      },
    ],
  },
]);

const footerLinks = [
  {
    label: t("dashboard.layout.links.footer.invite"),
    icon: "i-heroicons-plus",
    to: "/settings/members",
  },
  {
    label: t("dashboard.layout.links.footer.support"),
    icon: "i-heroicons-question-mark-circle",
    click: () => (isHelpSlideoverOpen.value = true),
  },
];

const groups = [
  {
    key: "links",
    label: t("dashboard.layout.links.footer.goto"),
    commands: links.map((link) => ({
      ...link,
      shortcuts: link.tooltip?.shortcuts,
    })),
  },
  {
    key: "support",
    label: t("dashboard.layout.links.footer.support"),
    commands: [
      {
        id: "support",
        label: t("dashboard.layout.links.footer.support"),
        icon: "i-heroicons-question-mark-circle",
        click: () => {
          window.open("#", "_blank");
        },
      },
    ],
  },
];
</script>

<template>
  <div>
    <PreLoader v-if="isLoading" />
    <UDashboardLayout v-show="!isLoading">
      <UDashboardPanel collapsible>
        <UDashboardNavbar class="!border-transparent" :ui="{ left: 'flex-1' }">
          <template #left>
            <PanelsDropdown />
          </template>
        </UDashboardNavbar>

        <UDashboardSidebar>
          <template #header>
            <UDashboardSearchButton :label="t('dashboard.search')" />
          </template>

          <UDashboardSidebarLinks :links="links" />

          <UDivider />

          <!-- <UDashboardSidebarLinks
            :links="[{ label: 'Colors', draggable: true, children: colors }]"
            @update:links="(colors) => (defaultColors = colors)"
          /> -->

          <div class="flex-1" />

          <UDashboardSidebarLinks :links="footerLinks" />

          <UDivider class="sticky bottom-0" />

          <template #footer>
            <!-- ~/components/UserDropdown.vue -->
            <UserDropdown />
          </template>
        </UDashboardSidebar>
      </UDashboardPanel>

      <slot />

      <!-- ~/components/HelpSlideover.vue -->
      <HelpSlideover />
      <!-- ~/components/NotificationsSlideover.vue -->
      <NotificationsSlideover />

      <ClientOnly>
        <LazyUDashboardSearch :groups="groups" />
      </ClientOnly>
    </UDashboardLayout>
  </div>
</template>
