<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

// Composables
const route = useRoute();
const { t } = useI18n();
const { isNotificationsSlideoverOpen } = useDashboard();

const product = {
  name: "Spray Termico",
  code: "34635sdfsdf",
  category: "Saúde, Bem-estar e Beleza",
  produtor: "Sonhar",
  amount: "120,99 a 500,99",
  image: "/products/9.png",
  temp: 140,
};

const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Detalhes",
    icon: "i-heroicons-information-circle",
  },
];

/**
 * Define head properties
 */
useHead({
  title: `${product.name} | Produto`,
  meta: [
    {
      name: "description",
      content: "My amazing site.",
    },
  ],
});
</script>
<template>
  <UDashboardPage
    :ui="{
      wrapper: 'flex flex-1 w-full min-w-0',
    }"
  >
    <UDashboardPanel grow>
      <!-- Navbar -->
      <UDashboardNavbar title="Olá, Wladi Veras">
        <template #right>
          <ToggleLocation size="sm" />
          <UColorModeButton size="sm" />
          <UTooltip :text="t('dashboard.notification')" :shortcuts="['N']">
            <UButton
              color="gray"
              variant="ghost"
              square
              @click="isNotificationsSlideoverOpen = true"
            >
              <UChip color="red" inset>
                <UIcon name="i-heroicons-bell" class="w-5 h-5" />
              </UChip>
            </UButton>
          </UTooltip>
        </template>
      </UDashboardNavbar>

      <UDashboardPanelContent>
        <section class="flex flex-col md:flex-row gap-x-8 py-8 items-center">
          <h3
            class="font-semibold text-2xl md:pr-10 md:border-r-[1px] md:border-r-[#e2e5ec]"
          >
            Detalhes do produto
          </h3>
          <section
            class="h-8 flex items-center md:pr-10 md:border-r-[1px] md:border-r-[#e2e5ec]"
          >
            <UBreadcrumb divider="/" :links="links" />
          </section>
          <UButton color="transparent" class="border-0 shadow-none">
            <UIcon name="i-heroicons-star" color="yellow" />
            <p class="text-yellow-500 hover:underline">
              Adicionar aos favoritos
            </p>
          </UButton>
        </section>
        <UCard
          :ui="{
            wrapper: 'h-full',
          }"
        >
          <template #header>
            <h1 class="font-regular text-3xl">
              {{ product.name }}
            </h1>
          </template>

          <UBlogPost
            :title="product.name"
            :description="product.category"
            orientation="horizontal"
            :image="{
              src: product.image,
              alt: `imagem do produto: ${product.name}`,
            }"
          />

          <template #footer>
            <Placeholder class="h-8" />
          </template>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
<style scoped></style>
