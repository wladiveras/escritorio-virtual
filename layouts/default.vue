<script lang="ts" setup>
const isLoading = ref(true);
const config = useRuntimeConfig();
const user = useSupabaseUser();
const Auth = useAuthStore();

onMounted(() => {
  Auth.getUserData();
  isLoading.value = false;
});

const page = reactive({
  title: config.public.name,
  description: "Seu escritorio de vendas online",
});

useSeoMeta({
  title: page.title,
  ogTitle: page.title,
  description: page.description,
  ogDescription: page.description,
});
</script>

<template>
  <div>
    <PreLoader v-if="isLoading" />
    <div v-show="!isLoading">
      <UPage>
        <Header />
        <UPageBody>
          <slot />
        </UPageBody>
        <Footer />
      </UPage>
    </div>
  </div>
</template>

<style></style>
