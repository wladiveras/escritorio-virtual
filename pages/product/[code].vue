<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

// Composables
const router = useRoute();
const { t } = useI18n();
const { isNotificationsSlideoverOpen } = useDashboard();
const Auth = useAuthStore();
const { user } = Auth;

const products = [
  {
    name: "Serum Facil",
    code: "zxdfws4532",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/1.png",
    temp: 53,
  },
  {
    name: "Combo Creatina Monohidratada",
    code: "243sdad3254",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/2.png",
    temp: 22,
  },
  {
    name: "Brain Focus",
    code: "345345xas",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/3.png",
    temp: 33,
  },
  {
    name: "Creatina Monohidratada",
    code: "fsadf23465t",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/4.png",
    temp: 133,
  },
  {
    name: "Combo Sonhar",
    code: "ast3464",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/5.png",
    temp: 67,
  },
  {
    name: "Protetor Solar",
    code: "6262423zxv",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/6.png",
    temp: 82,
  },
  {
    name: "Kit 3 em por 1",
    code: "23525xacx",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/7.png",
    temp: 99,
  },
  {
    name: "Serum Facil",
    code: "asdadas3423",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/8.png",
    temp: 150,
  },
  {
    name: "Spray Termico",
    code: "34635sdfsdf",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/9.png",
    temp: 150,
  },
];

function getProductByCode(products, code) {
  return products.filter((product) => product.code === code);
}

const code = router.params.code;
const product = getProductByCode(products, code);

console.log({
  code,
  product,
});
// Progress Bar
function resolveColor(temp: number) {
  switch (true) {
    case temp < 50:
      return "blue";
    case temp < 70:
      return "amber";
    case temp < 100:
      return "orange";
    default:
      return "red";
  }
}

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
  title: `${product[0].name} | Escritório Online`,
  meta: [
    {
      name: "description",
      content: `${product[0].name} | Escritório Online`,
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
              {{ product[0].name }}
            </h1>
          </template>

          <UBlogPost
            orientation="horizontal"
            :image="{
              src: product[0].image,
              alt: `imagem do produto: ${product[0].name}`,
            }"
          >
            <template #default>
              <div class="relative">
                <div>
                  <b class="text-3xl">{{ product[0].name }}</b>
                  <p>{{ product[0].category }}</p>
                  <br />
                  <br />

                  <p class="relative">
                    Codigo do produto: <b>{{ product[0].code }}</b>
                    <br />
                    Tipo decomissionamento: <b>Último Clique</b><br />
                    Preço: <b>{{ product[0].amount }} </b> <br />
                    Comissão dos afiliados:
                    <b class="text-green-600"> 50,00%</b>
                  </p>
                  <UProgress
                    :value="product[0].temp"
                    :max="150"
                    :color="resolveColor(product[0].temp)"
                    class="mb-8"
                  >
                    <template #indicator="{ percent }">
                      <div class="text-right" :style="{ width: `${percent}%` }">
                        <span
                          v-if="product[0].temp < 40"
                          class="text-blue-500 text-nowrap"
                        >
                          ❄️ Muito frio!
                        </span>
                        <span
                          v-else-if="product[0].temp < 70"
                          class="text-amber-500 text-nowrap"
                        >
                          💧 Morno!
                        </span>
                        <span
                          v-else-if="product[0].temp < 100"
                          class="text-orange-500 text-nowrap"
                        >
                          ⚡ Quente!
                        </span>
                        <span v-else class="text-red-500 font-bold text-nowrap">
                          🔥 Em alta!
                        </span>
                      </div>
                    </template>
                  </UProgress>

                  <UAlert color="primary" variant="solid">
                    <template #description>
                      <b
                        class="text-yellow-500 text-xl text-center w-full block"
                      >
                        Você ganha até <b class="text-2xl">R$ 348,50</b> por
                        indicação de venda!
                      </b>
                    </template>
                  </UAlert>
                  <br />

                  <UButton
                    class="bg-primary w-full text-base text-center"
                    block
                  >
                    Promover este Produto
                  </UButton>
                </div>
              </div>
            </template>
          </UBlogPost>

          <template #footer> </template>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
<style scoped></style>
