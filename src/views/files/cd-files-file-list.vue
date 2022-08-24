<template>
  <div
    class="cd-rounded-[14px] cd-grid cd-grid-cols-1 md:cd-grid-cols-2 lg:cd-grid-cols-3 cd-gap-5"
  >
    <cd-files-file-item v-for="file in files" :key="file.id" :file="file" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { File } from "@/types/user";

export default defineComponent({
  name: "cd-files-file-list",
  props: {
    files: {
      type: Array as PropType<File[]>
    }
  }
});
</script>
