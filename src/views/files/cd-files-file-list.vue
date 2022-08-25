<template>
  <div class="cd-rounded-[14px] cd-bg-white cd-p-6 cd-h-full">
    <div class="cd-flex cd-items-center cd-mb-2">
      <cd-button class="cd-mr-6" active @click="toParentDir">{{ "<" }} Back</cd-button>
      <span>{{ currentDir.name || "root" }}</span>
    </div>

    <div
      class="cd-rounded-[14px] cd-grid cd-grid-cols-1 md:cd-grid-cols-2 lg:cd-grid-cols-3 cd-gap-5"
    >
      <cd-files-file-item
        v-for="file in files"
        :key="file.id"
        :file="file"
        class="cd-cursor-pointer cd-transition hover:cd-scale-[1.01] hover:cd-shadow"
        @click="selectDir(file)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { File } from "@/types/file";
import { useStore } from "@/store";

export default defineComponent({
  name: "cd-files-file-list",

  props: {
    files: {
      type: Array as PropType<File[]>
    }
  },
  setup() {
    const store = useStore();
    const currentDir = computed(() => {
      return store.state.file.currentDir;
    });
    const toParentDir = () => {
      if (currentDir.value?.rootUserId) return;
      store.dispatch("file/selectDir", currentDir.value?.parentId);
    };

    const selectDir = (file: File) => {
      store.dispatch("file/selectDir", file.id);
    };
    return {
      currentDir,
      toParentDir,
      selectDir
    };
  }
});
</script>
