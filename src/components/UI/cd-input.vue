<template>
  <div
    class="cd-relative cd-py-3 cd-px-5 cd-bg-grey-controls cd-rounded-[7px]"
    :class="[inputClasses, { 'cd-pr-10': icon }]"
  >
    <input
      id="input-native"
      :type="type"
      :placeholder="placeholder"
      autocomplete="off"
      v-model="inputValue"
      class="cd-text-sm cd-leading-5 cd-bg-grey-controls cd-h-5"
    />
    <component
      :is="icon"
      v-if="icon"
      :class="iconClasses"
      class="cd-absolute cd-right-3 cd-top-1/2 cd-transition -cd-translate-y-1/2"
    />
  </div>
</template>
<script lang="ts" setup>
import { computed, toRefs } from "vue";
import { useModelWrapper } from "@/hooks/modelWrapper";

const props = defineProps({
  modelValue: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  classes: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: String,
    default: "Input text..."
  },
  iconClasses: {
    type: String,
    default: null
  }
});

const emit = defineEmits(["update:modelValue"]);

const { classes } = toRefs(props);

const inputClasses = computed(() => {
  const baseClasses =
    "cd-py-3 cd-px-5 cd-bg-grey-controls cd-rounded-[7px] cd-text-sm cd-leading-5";
  const allClasses = [baseClasses, classes].join(" ");
  return allClasses;
});
const inputValue = useModelWrapper(props, emit);
</script>
