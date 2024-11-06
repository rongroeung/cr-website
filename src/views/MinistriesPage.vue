<script>
export default {
  name: 'MinistriesPage',
  data() {
    return {
      section1: null,
      contents: []
    }
  },
  async created() {
    this.section1 = await this.getContentById('06001001')

    // Fetch all content IDs
    this.contents = await this.getAllContentStartByIds('06002')
  }
}
</script>

<template>
  <section class="bg-cr-gray-light h-fit w-full flex-center flex-col">
    <div id="06001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>

    <div class="content h-full text-black w-4/5">
      <template v-for="content in contents" :key="content.id">
        <ContentSection :section="content" />
      </template>
    </div>
  </section>
</template>

<script scoped></script>
