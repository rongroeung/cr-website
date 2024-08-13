<script>
export default {
  name: 'DiscipleshipCard',
  props: {
    iconPath: String,
    cardHeader: String,
    cardContents: Array
  }
}
</script>

<template>
  <div class="max-w-sm h-80 p-6 m-4 bg-white border rounded-lg shadow text-center">
    <div class="flex items-center">
      <img :src="iconPath" />
      <p class="ms-2 text-2xl uppercase font-bold" v-t="cardHeader"></p>
    </div>
    <ol class="list-decimal text-left m-2">
      <template v-for="content in cardContents" :key="content">
        <li v-t="content"></li>
      </template>
    </ol>
  </div>
</template>

<style scoped></style>
