<script lang="ts" setup>
const isOpen = ref(false);

const products = [
  {
    name: "Serum Facil",
    code: "zxdfws4532",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/1.png",
  },
  {
    name: "Combo Creatina Monohidratada",
    code: "243sdad3254",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/2.png",
  },
  {
    name: "Brain Focus",
    code: "345345xas",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/3.png",
  },
  {
    name: "Creatina Monohidratada",
    code: "fsadf23465t",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/4.png",
  },
  {
    name: "Combo Sonhar",
    code: "ast3464",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/5.png",
  },
  {
    name: "Protetor Solar",
    code: "6262423zxv",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/6.png",
  },
  {
    name: "Kit 3 em por 1",
    code: "23525xacx",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/7.png",
  },
  {
    name: "Serum Facil",
    code: "asdadas3423",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/8.png",
  },
  {
    name: "Spray Termico",
    code: "34635sdfsdf",
    category: "Saúde, Bem-estar e Beleza",
    produtor: "Sonhar",
    amount: "120,99 a 500,99",
    image: "/products/9.png",
  },
];
</script>

<template>
  <LandingProductDetail
    v-model="isOpen"
    @close-modal="isOpen = false"
    v-if="isOpen"
  />

  <div v-if="!isOpen">
    <UBlogList orientation="horizontal">
      <UCard
        v-motion-pop-visible
        v-for="product in products"
        :key="product.name"
      >
        <UBlogPost
          @click="isOpen = true"
          orientation="vertical"
          class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
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
