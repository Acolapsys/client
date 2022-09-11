<template>
  <button :class="buttonClasses" :type="type" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  primary: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "submit"
  },
  rounded: {
    type: Boolean,
    default: false
  },
  classes: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const { primary, rounded, classes, disabled } = toRefs(props);

const buttonClasses = computed(() => {
  const baseClasses =
    "cd-h-10 cd-px-5 cd-font-semibold cd-text-sm cd-leading-[18px] cd-text-grey-3 cd-border cd-border-grey-2";
  const overClasses =
    "enabled:hover:cd-border-primary enabled:hover:cd-bg-primary enabled:hover:cd-text-white";
  const transitionClasses = "cd-transition";
  const roundedClasses = rounded.value ? "cd-rounded-full" : "cd-rounded-[7px]";
  const primaryClasses = "cd-border-primary cd-bg-primary cd-text-white";
  const primaryOverClasses =
    "enabled:hover:cd-opacity-70 enabled:hover:cd-border-transparent";
  const disabledClasses = "cd-opacity-60";
  const allClasses = [
    baseClasses,
    overClasses,
    transitionClasses,
    classes,
    roundedClasses,
    {
      [primaryClasses]: primary.value,
      [primaryOverClasses]: primary.value,
      [disabledClasses]: disabled.value
    }
  ];
  return allClasses;
});
</script>
