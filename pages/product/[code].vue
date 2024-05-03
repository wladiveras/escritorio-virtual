<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

// Composables
const route = useRoute();
const { t } = useI18n();
const { isNotificationsSlideoverOpen } = useDashboard();
const Auth = useAuthStore();
const { user } = Auth;

const product = {
  name: "Spray Termico",
  code: "34635sdfsdf",
  category: "Saúde, Bem-estar e Beleza",
  produtor: "Sonhar",
  amount: "120,99 a 500,99",
  image: "/products/9.png",
  temp: 140,
  description: `
  Página de venda: https://audionex.com.br/

Tipo de comissionamento: Último Clique

Preço: R$ 197,00 a R$ 697,00

Comissão dos afiliados: 50,00%
`,
};

const links = [
  {
    label: "dashboard",
    icon: "i-heroicons-home",
    to: "/dashboard",
  },
  {
    label: "Detalhes",
    icon: "i-heroicons-information-circle",
  },
];
useHead({
  title: `${product.name} | Escritório Online`,
  meta: [
    {
      name: "description",
      content: `${product.name} | Escritório Online`,
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
      <UDashboardNavbar :title="user.name">
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
            orientation="horizontal"
            :image="{
              src: product.image,
              alt: `imagem do produto: ${product.name}`,
            }"
          >
            <template #default>
              <div class="relative">
                <div>
                  <b class="text-3xl">{{ product.name }}</b>
                  <p>{{ product.category }}</p>
                  <br />
                  <p>{{ product.description }}</p>

                  <UButton></UButton>
                </div>
              </div>
            </template>
          </UBlogPost>

          <template #footer>
            <Placeholder class="h-8" />
          </template>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
<style scoped></style>
