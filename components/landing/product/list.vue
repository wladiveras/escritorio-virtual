<script lang="ts" setup>
const router = useRouter();
const isOpen = ref(false);

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
    temp: 140,
  },
];

const filteredProducts = computed(() => {
  return products.sort(function (a, b) {
    return b.temp - a.temp;
  });
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
</script>

<template>
  <LandingProductDetail
    v-if="isOpen"
    v-model="isOpen"
    @close-modal="isOpen = false"
  />

  <div v-if="!isOpen">
    <UBlogList
      orientation="horizontal"
      :ui="{
        wrapper:
          'flex flex-col gap-x-0 gap-y-0 gap-4 md:grid lg:grid-cols-3 xl:grid-cols-4',
      }"
    >
      <UCard
        v-for="product in filteredProducts"
        :key="product.name"
        v-motion-pop-visible
      >
        <UBlogPost
          orientation="vertical"
          class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          @click="router.push(`/product/${product.code}`)"
        >
          <template #title>
            <div class="text-center">
              <p class="item-title">{{ product.name }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-600">
                Código: {{ product.code }}
              </p>
            </div>
          </template>
          <template #description>
            <div class="m-auto text-center">
              <UProgress
                :value="product.temp"
                :max="150"
                :color="resolveColor(product.temp)"
                class="mb-8"
              >
                <template #indicator="{ percent }">
                  <div class="text-right" :style="{ width: `${percent}%` }">
                    <span
                      v-if="product.temp < 40"
                      class="text-blue-500 text-nowrap"
                    >
                      Too cold!
                    </span>
                    <span
                      v-else-if="product.temp < 70"
                      class="text-amber-500 text-nowrap"
                    >
                      Warm
                    </span>
                    <span
                      v-else-if="product.temp < 100"
                      class="text-orange-500 text-nowrap"
                    >
                      Hot
                    </span>
                    <span v-else class="text-red-500 font-bold text-nowrap">
                      🔥 Too hot!
                    </span>
                  </div>
                </template>
              </UProgress>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <span class="font-bold">Categoria:</span> {{ product.category }}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <span class="font-bold">Produtor:</span>
                {{ product.produtor }}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <span class="font-bold">Preço:</span> {{ product.amount }}
              </p>
            </div>
          </template>
          <!-- <template #badge>
        <UBadge label="Assinatura" class="relative bottom-1 mt-2" />
      </template> -->
          <template #image>
            <img
              :src="product.image"
              class="w-full h-full object-cover rounded-lg"
            />
          </template>
        </UBlogPost>
      </UCard>
    </UBlogList>
  </div>
</template>

<style scoped>
.item-title {
  text-overflow: ellipsis !important;
  overflow: hidden !important;
}
</style>
