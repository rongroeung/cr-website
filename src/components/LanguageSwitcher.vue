<script setup>
import { useI18n } from 'vue-i18n'
import { watchEffect } from 'vue'

const { locale } = useI18n()

const disableClass = 'cursor-not-allowed	text-gray-500'

const setLanguage = (newLang) => {
  locale.value = newLang
  localStorage.setItem('lang', newLang)
  window.location.reload()
}

const isSeleted = (lang) => {
  return localStorage.getItem('lang') == lang
}

watchEffect(() => {
  const storedLang = localStorage.getItem('lang')
  if (storedLang) {
    locale.value = storedLang
  }
})
</script>

<template>
  <div class="LanguageSwitcher">
    <div class="language mr-2" :class="isSeleted('kh') ? disableClass : ''">
      <img loading="lazy" src="../assets/img/kh-flag.png" />
      <button @click="setLanguage('kh')" :disabled="isSeleted('kh')">ភាសាខ្មែរ</button>
    </div>
    <div class="language" :class="isSeleted('en') ? disableClass : ''">
      <img loading="lazy" src="../assets/img/us-flag.png" />
      <button @click="setLanguage('en')" :disabled="isSeleted('en')">English</button>
    </div>
  </div>
</template>

<style scoped>
.LanguageSwitcher {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: white;
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

.language:hover button:enabled {
  color: var(--primary-color);
}

button:disabled {
  cursor: not-allowed;
}
</style>
