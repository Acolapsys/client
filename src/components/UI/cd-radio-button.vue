<template>
  <label
    class="cd-select-none cd-inline-flex cd-items-center cd-cursor-pointer"
    :class="{ 'cd-opacity-50': disabled }"
  >
    <input
      :id="id"
      :name="name"
      type="radio"
      :checked="isChecked"
      :value="value"
      @input="updateInput"
      :disabled="disabled"
    />
    <span
      class="cd-inline-flex cd-justify-center cd-items-center cd-w-6 cd-h-6 cd-rounded-full cd-border"
    >
      <span
        v-show="isChecked"
        class="cd-w-[.875rem] cd-h-[.875rem] cd-rounded-full cd-bg-primary"
      />
    </span>
    <span class="cd-ml-2.5 cd-leading-none">{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: ""
  },
  modelValue: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const { value, modelValue, label, id, name, disabled } = toRefs(props);
const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => {
  return modelValue.value === value.value;
});

const updateInput = () => {
  emit("update:modelValue", value.value);
};
</script>
