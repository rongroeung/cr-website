<script>
import UpdateDataForm from '@/components/admin/UpdateDataForm.vue'
export default {
  name: 'NotFoundPage',
  components: { UpdateDataForm }
}
</script>

<template>
  <section class="bg-secondary">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center">
      This is Admin Page

      <UpdateDataForm class="w-1/2" />
    </div>
  </section>
</template>

<script scoped></script>
