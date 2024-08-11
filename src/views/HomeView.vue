<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <main>
    <h1 class="text-primary">Home Page</h1>
    <LanguageSwitcher />
    <p class="text-black">{{ t('welcome') }}</p>
  </main>
</template>
