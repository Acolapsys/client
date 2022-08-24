<template>
  <div
    class="cd-border cd-border-grey-4 cd-bg-white cd-rounded-[10px] cd-px-6 cd-py-5 cd-h-[140px] cd-w-full cd-flex-shrink-0 cd-flex cd-flex-col"
  >
    <component :is="icon" class="cd-w-[30px] cd-h-[30px] cd-mb-auto cd-text-blue-light" />
    <p class="cd-text-base-secondary cd-text-sm cd-font-bold">{{ file.name }}</p>
    <p class="cd-text-grey-5 cd-text-[13px]">{{ date }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { File } from "@/types/user";

export default defineComponent({
  props: {
    file: {
      type: Object as PropType<File>,
      required: true
    }
  },
  setup(props) {
    const icon = computed(() => {
      const isDir = props.file?.type === "dir";
      return isDir ? "cd-icon-folder" : "cd-icon-file-others";
    });
    const date = computed(() => {
      return new Date(props.file.createdAt).toLocaleDateString();
    });
    return { icon, date };
  }
});
</script>
