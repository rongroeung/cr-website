<script>
export default {
  name: 'PastoralTeamHighlightCard',
  props: {
    item: Object
  }
}
</script>
<template>
  <section class="pastoral-team-highlight-card w-35rem bg-white rounded-lg m-4 p-6">
    <div class="mb-8 text-xl text-gray-600" v-t="item.content"></div>
    <div class="profile-section flex">
      <img
        v-if="item.id == 1"
        src="../assets/img/Rathana-Profile.png"
        class="rounded-full w-20 h-20 me-4 object-cover"
      />
      <img
        v-if="item.id == 2"
        src="../assets/img/Menghun-Profile.png"
        class="rounded-full w-20 h-20 me-4 object-cover"
      />
      <img
        v-if="item.id == 3"
        src="../assets/img/Dany-Profile.png"
        class="rounded-full w-20 h-20 me-4 object-cover"
      />
      <div class="flex flex-col justify-center">
        <p v-t="item.name" class="text-secondary text-xl"></p>
        <p v-t="item.role" class="uppercase text-gray-500 font-semibold"></p>
      </div>
    </div>
  </section>
</template>
<script scoped></script>
