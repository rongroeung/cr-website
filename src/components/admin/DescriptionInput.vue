<template>
  <div class="description-input flex flex-col w-full p-3 border-rounded-sub-primary">
    <label class="font-medium text-center text-2xl">Description</label>
    <div v-for="(desc, index) in description" :key="index" class="flex flex-col mb-2">
      <b class="text-secondary">Description {{ index + 1 }}</b>
      <TextareaInput label="English" v-model="desc.text" :id="'description' + index" />
      <TextareaInput label="Khmer" v-model="desc.kh_text" :id="'kh_description' + index" />
      <button
        v-if="removeAble"
        type="button"
        @click="$emit('remove', index)"
        class="bg-red-500 text-white px-4 py-2 rounded my-4 w-24 ms-auto"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import TextareaInput from './TextareaInput.vue'
export default {
  props: {
    description: {
      type: Array,
      required: true
    },
    removeAble: {
      type: Boolean,
      required: false
    }
  },
  components: {
    TextareaInput
  }
}
</script>
