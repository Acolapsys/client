<template>
  <label
    class="cd-select-none cd-inline-flex cd-items-center cd-cursor-pointer"
    :class="{ 'cd-opacity-50': disabled }"
  >
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled="disabled"
    />
    <span
      class="cd-inline-flex cd-justify-center cd-items-center cd-w-6 cd-h-6 cd-rounded cd-border"
    >
      <span
        v-show="isChecked"
        class="cd-w-[.875rem] cd-h-[.875rem] cd-rounded-[2px] cd-bg-primary"
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
    type: [Boolean, Array],
    default: false
  },
  label: {
    type: String,
    required: true
  },
  trueValue: {
    type: Boolean,
    default: true
  },
  falseValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const { value, modelValue, label, trueValue, falseValue, disabled } = toRefs(props);
const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => {
  if (modelValue.value instanceof Array) {
    return modelValue.value.includes(value.value);
  }
  return modelValue.value === trueValue.value;
});

const updateInput = (event: Event) => {
  const isChecked = (event.target as HTMLInputElement).checked;
  if (modelValue.value instanceof Array) {
    const newValue = [...modelValue.value];

    if (isChecked) {
      newValue.push(value.value);
    } else {
      newValue.splice(newValue.indexOf(value.value), 1);
    }

    emit("update:modelValue", newValue);
  } else {
    emit("update:modelValue", isChecked ? trueValue.value : falseValue.value);
  }
};
</script>
