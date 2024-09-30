<template>
  <div class="flex flex-row my-4">
    <p class="font-medium w-20">{{ label }}</p>
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
      class="border rounded p-2"
      ref="textarea"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    id: String,
    label: String,
    rows: {
      type: Number,
      default: 3
    },
    placeholder: String
  },
  mounted() {
    // Auto resize on component mount if content is pre-filled
    this.resizeTextarea()
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
      this.resizeTextarea()
    },
    resizeTextarea() {
      const textarea = this.$refs.textarea
      textarea.style.height = 'auto' // Reset height
      textarea.style.height = textarea.scrollHeight + 'px' // Set new height based on content
    }
  }
}
</script>

<style scoped>
input {
  background-color: var(--cr-gray);
}

textarea {
  color: black;
  width: 100%;
  height: auto;
  min-height: 40px;
  overflow-y: hidden;
}
</style>
