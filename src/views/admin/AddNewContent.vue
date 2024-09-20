<script>
import AddNewContentForm from '../../components/admin/AddNewContentForm.vue'
export default {
  name: 'AddNewContent',
  components: { AddNewContentForm },
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
  }
}
</script>
<template>
  <section>
    <p class="text-2xl md:text-3xl text-center">Add new content</p>
    <div class="h-fit w-full flex flex-wrap items-start">
      <AddNewContentForm class="w-full md:w-1/2 h-full" v-model="data" />
      <div
        class="w-full md:w-1/2 min-h-96 h-fit mt-12 p-4 bg-sub-secondary text-cr-gray rounded-lg"
      >
        <p class="text-center">Json preview</p>
        <pre class="text-wrap">{{ data }}</pre>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
