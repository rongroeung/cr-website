<template>
  <div class="description-input">
    <div v-for="(desc, index) in description" :key="index" class="flex flex-col mb-2">
      <TextareaInput label="English" v-model="desc.text" :id="'description' + index" />
      <TextareaInput label="Khmer" v-model="desc.kh_text" :id="'kh_description' + index" />
      <button
        v-if="removeAble"
        @click="$emit('remove', index)"
        class="bg-red-500 text-white px-4 py-2 rounded my-4 w-24 ms-auto"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput.vue'
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
    TextInput,
    TextareaInput
  }
}
</script>
