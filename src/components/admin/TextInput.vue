<template>
  <div class="flex flex-col mb-4">
    <label :for="id" class="font-medium">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border rounded p-2"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
label {
  /* color: var(--secondary-color); */
  font-size: medium;
  margin-bottom: 0.5rem;
}
input {
  color: black;
  background-color: var(--cr-gray);
}
</style>
