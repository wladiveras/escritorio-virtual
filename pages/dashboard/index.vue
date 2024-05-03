<script setup lang="ts">
const { $storage } = useNuxtApp();
const { t } = useI18n();
const Auth = useAuthStore();

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const { user } = Auth;

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});

const items = ["/banner-1.png", "/banner-2.png", "/banner-3.jpg"];

const { isNotificationsSlideoverOpen } = useDashboard();
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar>
        <template #title> Olá, {{ user.name }} </template>
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

      <UDashboardToolbar>
        <template #left>
          <p class="text-base font-bold">
            Desejamos boas vindas!
            <UIcon
              name="solar:heart-bold-duotone"
              class="relative font-italic top-[-1px]"
              color="blue"
              size="1.5rem"
            />
          </p>
        </template>
      </UDashboardToolbar>

      <UDashboardPanelContent>
        <a href="#" class="cursor-pointer">
          <UCarousel
            ref="carouselRef"
            v-slot="{ item }"
            :items="items"
            :ui="{ item: 'basis-full' }"
            class="rounded-lg overflow-hidden mb-10"
            indicators
          >
            <img :src="item" class="w-full" draggable="false" />
          </UCarousel>
        </a>

        <div class="flex flex-col md:flex-row gap-10 pb-10 w-full">
          <UCard class="w-full p-1">
            <p class="text-base font-bold pb-2">Total das vendas</p>
            <p class="text-3xl font-bold text-sky-500">R$ 0,00</p>

            <template #footer>
              <div class="flex">
                <div class="flex flex-col md:flex-row justify-between w-full">
                  <p class="text-base">
                    Quantidade de vendas: <span class="text-sky-500">0</span>
                  </p>
                  <p class="text-base">
                    Tícket médio vendas:
                    <span class="text-yellow-600">R$ 0,00</span>
                  </p>
                </div>
              </div>
            </template>
          </UCard>

          <UCard class="w-full">
            <p class="text-base font-bold pb-2">Total das comissões</p>
            <p class="text-3xl font-bold text-green-500">R$ 0,00</p>

            <template #footer>
              <div class="flex">
                <div class="flex flex-col md:flex-row justify-between w-full">
                  <p class="text-base">
                    Tícket médio comissões:
                    <span class="text-yellow-600">R$ 0,00</span>
                  </p>
                </div>
              </div>
            </template>
          </UCard>
        </div>

        <LandingProduct />
        <UDivider
          :avatar="{
            src: '/logo-118.png',
          }"
          class="py-10 px-10"
        />
        <div class="relative">
          <UPagination
            class="absolute right-10 bottom-1"
            :max="5"
            :page-count="5"
            :total="100"
            :model-value="1"
          />
        </div>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<style lang="scss" scoped>
.w-content {
  @include w-border-debug;
}

.wrapper-center,
.wrapper-right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-text {
  width: 85%;
}
.image-logo {
  width: 90px;
  position: absolute;
  right: 50px;
}
.wrapper-center,
.wrapper-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-recommendation {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  min-height: 161px;
  gap: 12px;
  background: #fff;
  background-image: url(banner-background.png);
  background-size: cover;
  flex-flow: row wrap;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
</style>
