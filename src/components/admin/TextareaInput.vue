<template>
  <div class="flex flex-row my-4">
    <p class="font-medium w-20">{{ label }}</p>
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border rounded p-2"
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
  }
}
</script>

<style scoped>
label {
  color: var(--primary-color);
  font-size: medium;
  margin-bottom: 0.5rem;
}
input {
  color: black;
  background-color: var(--cr-gray);
}

textarea {
  color: black;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
