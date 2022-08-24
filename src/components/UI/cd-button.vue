<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { active } = toRefs(props);
    const buttonClasses = computed(() => {
      const baseClasses =
        "cd-py-3 cd-px-5 cd-rounded-full cd-font-semibold cd-text-sm cd-leading-[18px] cd-text-grey-3 cd-rounded-1/2 cd-border cd-border-grey-2";
      const overClasses = "hover:cd-border-none hover:cd-bg-primary hover:cd-text-white";
      const transitionClasses = "cd-transition";
      const activeClasses = "cd-border-none cd-bg-primary cd-text-white";
      const activeOverClasses = " hover:cd-bg-opacity-50";
      const allClasses = [baseClasses, overClasses, transitionClasses];
      if (active.value) {
        allClasses.push(activeClasses, activeOverClasses);
      }
      return allClasses.join(" ");
    });
    return { buttonClasses };
  }
});
</script>
