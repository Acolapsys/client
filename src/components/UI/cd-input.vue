<template>
  <div
    class="cd-relative cd-py-3 cd-px-5 cd-bg-grey-controls cd-rounded-[7px]"
    :class="{ 'cd-pr-10': icon, [classes]: true }"
  >
    <input
      :type="type"
      :placeholder="placeholder"
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
<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";
import { useModelWrapper } from "@/hooks/modelWrapper";

export default defineComponent({
  props: {
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
      default: null
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
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { classes } = toRefs(props);
    const inputClasses = computed(() => {
      const baseClasses =
        "cd-py-3 cd-px-5 cd-bg-grey-controls cd-rounded-[7px] cd-text-sm cd-leading-5";
      const allClasses = [baseClasses].join(" ");
      return allClasses;
    });
    const inputValue = useModelWrapper(props, emit);
    return { inputValue, inputClasses };
  }
});
</script>
