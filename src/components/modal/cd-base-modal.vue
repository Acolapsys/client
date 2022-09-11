<template>
  <div
    v-if="visible"
    class="cd-fixed cd-z-50 cd-inset-0 cd-w-full cd-h-screen cd-overflow-auto cd-bg-grey-1 cd-bg-opacity-60 cd-flex cd-justify-center cd-items-center"
  >
    <div class="cd-relative">
      <cd-icon-close
        class="cd-absolute cd-right-6 cd-top-6 cd-w-4 cd-h-4"
        @click="close"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});
const { visible } = toRefs(props);

const emit = defineEmits(["update:visible", "close"]);

const close = () => {
  emit("update:visible", false);
  emit("close");
};
</script>
