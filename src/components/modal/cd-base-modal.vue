<template>
  <div v-if="visible" class="overlay cd-inset-0 cd-bg-black cd-opacity-30">
    <div class="modal cd-m-auto cd-min-h-[15rem] cd-min-w-[20rem] cd-relative">
      <cd-icon-close class="cd-absolute cd-right-3 cd-top-3" />
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "cd-modal",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {};
  }
});
</script>
