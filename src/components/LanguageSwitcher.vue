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

const select = (lang) => {
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
    <div
      @click="setLanguage('kh')"
      :disabled="select('kh')"
      class="language mr-2"
      :class="select('kh') ? disableClass : ''"
    >
      <img loading="lazy" src="../assets/img/kh-flag.png" />
      <button>ភាសាខ្មែរ</button>
    </div>
    <div
      @click="setLanguage('en')"
      :disabled="select('en')"
      class="language"
      :class="select('en') ? disableClass : ''"
    >
      <img loading="lazy" src="../assets/img/us-flag.png" />
      <button>English</button>
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
