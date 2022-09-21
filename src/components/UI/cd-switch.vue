<template>
  <label
    class="cd-select-none cd-inline-flex cd-items-center cd-cursor-pointer"
    :class="{ 'cd-opacity-50': disabled }"
  >
    <input
      type="checkbox"
      :checked="isChecked"
      :value="modelValue"
      @change="updateInput"
      :disabled="disabled"
    />
    <span
      class="cd-inline-flex cd-items-center cd-w-12 cd-h-6 cd-rounded-full cd-border cd-px-1 cd-transition-all cd-duration-300 cd-ease-out"
      :class="{ 'cd-bg-primary cd-border-primary': isChecked }"
    >
      <span
        class="cd-w-4 cd-h-4 cd-rounded-full cd-bg-primary cd-transition-all cd-duration-300 cd-ease-out"
        :class="{ 'cd-translate-x-[22px] !cd-bg-white': isChecked }"
      />
    </span>
    <span class="cd-ml-2.5 cd-leading-none">{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const { modelValue, label, disabled } = toRefs(props);
const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => {
  return modelValue.value;
});

const updateInput = (event: Event) => {
  const isChecked = (event.target as HTMLInputElement).checked;

  emit("update:modelValue", isChecked);
};
</script>
