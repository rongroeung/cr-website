<script>
import DynamicShadow from '@/components/DynamicShadow.vue'
import AddNewContentForm from '@/components/admin/AddNewContentForm.vue'
export default {
  name: 'AddNewContent',
  components: { AddNewContentForm, DynamicShadow },
  data() {
    return {
      data: {
        id: '',
        title: '',
        kh_title: '',
        sub_title: '',
        kh_sub_title: '',
        description: [],
        media: [],
        youtube: []
      }
    }
  },
  computed: {
    dynamicClass() {
      // Check if any description is long
      const hasLongDescription = this.data.description.some((content) => content.text.length > 100)
      return hasLongDescription ? 'mb-4' : 'mb-2'
    },
    titleClass() {
      return 'text-xl md:text-2xl xl:text-3xl font-bold text-cr-gray-darker mb-6 text-center md:text-left'
    },
    subTitleClass() {
      return 'text-sm leading-6 md:leading-8 md:text-lg mb-6 text-left text-cr-gray-darker'
    },
    descClass() {
      return 'text-sm leading-6 md:leading-8 md:text-lg text-cr-gray-darker text-left'
    }
  }
}
</script>
<template>
  <section>
    <DynamicShadow text="Add new Content" />
    <ResizableContainer>
      <template #left_container>
        <AddNewContentForm v-model="data" />
      </template>
      <template #right_container>
        <div class="h-full rounded-lg">
          <p class="text-center text-black text-xl">Content preview</p>
          <div class="text-wrap w-full p-4 rounded-lg border-1">
            <p :class="titleClass">Title: {{ data.title }}</p>
            <p :class="titleClass">Title Kh:{{ data.kh_title }}</p>
            <p :class="subTitleClass">SubTitle:{{ data.sub_title }}</p>
            <p :class="subTitleClass">SubTitle Kh:{{ data.kh_sub_title }}</p>
            <div v-for="description in data.description" :key="description" :class="dynamicClass">
              <div :class="descClass" v-html="description.text"></div>
              <div :class="descClass" v-html="description.kh_text"></div>
            </div>
            <div class="flex-center flex-col flex-wrap justify-center gap-4">
              <template v-for="(image, index) in data.media" :key="index">
                <p>{{ image.name }}</p>
                <img :src="image.url" :alt="image.name" class="cr-img-md-3-2 rounded-lg" />
              </template>
            </div>
          </div>
        </div>
      </template>
    </ResizableContainer>
  </section>
</template>

<style scoped>
.resize-btn {
  top: -20px;
}
</style>
