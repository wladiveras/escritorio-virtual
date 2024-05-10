<script setup>
const Auth = useAuthStore();
const { user } = Auth;

const { isNotificationsSlideoverOpen } = useDashboard();

const links = [
  {
    label: "dashboard",
    icon: "i-heroicons-home",
    to: "/dashboard",
  },
  {
    label: "Pedidos enviados",
    icon: "i-heroicons-information-circle",
  },
];
</script>

<template>
  <UDashboardPage
    :ui="{
      wrapper: 'flex flex-1 w-full min-w-0',
    }"
  >
    <UDashboardPanel grow>
      <!-- Navbar -->


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
            <h1 class="font-regular text-3xl">xxxxxx</h1>
          </template>

          <template #footer> </template>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
