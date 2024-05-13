<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  layout: "default",
});
const user = useSupabaseUser();
</script>

<template>
  <UContainer>
    <LandingHeader />
    <LandingLogos />
    <LandingTestemonial />
    <LandingFaq />
  </UContainer>

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
