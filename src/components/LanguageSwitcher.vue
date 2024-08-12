<template>
  <div class="LanguageSwitcher">
    <div class="language mr-2">
      <img src="../assets/img/kh-flag.png" />
      <button @click="setLanguage('kh')">ភាសាខ្មែរ</button>
    </div>
    <div class="language">
      <img src="../assets/img/us-flag.png" />
      <button @click="setLanguage('en')">English</button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { watchEffect } from 'vue'

const { locale } = useI18n()

const setLanguage = (newLang) => {
  locale.value = newLang
  localStorage.setItem('lang', newLang)
}

watchEffect(() => {
  const storedLang = localStorage.getItem('lang')
  if (storedLang) {
    locale.value = storedLang
  }
})
</script>

<style scoped>
.LanguageSwitcher {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.language {
  display: flex;
  flex-direction: row;
  height: 1.5rem;
  width: 6rem;
}

.language img {
  margin-right: 0.25rem;
}

.language:hover button {
  color: var(--primary-color);
}
</style>