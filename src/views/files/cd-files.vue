<template>
  <div class="cd-flex cd-justify-between cd-mb-8">
    <h1 class="cd-font-bold cd-text-3xl cd-leading-10">Files</h1>
    <div class="cd-flex">
      <cd-button active class="cd-mr-4">
        <span>+ Create new folder</span>
      </cd-button>
      <cd-button class="cd-flex cd-text-grey-3">
        <cd-icon-upload-file class="cd-mr-[10px] cd-w-5 cd-h-5 cd-flex-shrink-0" />
        <span>Upload</span>
      </cd-button>
    </div>
  </div>
  <cd-files-file-list :files="files" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "cd-files",
  setup() {
    const store = useStore();

    const files = computed(() => {
      return store.state.file.files;
    });
    const currentDir = computed(() => {
      return store.state.file.currentDir;
    });
    onBeforeMount(async () => {
      await store.dispatch("file/getFiles", currentDir.value);
    });

    return { files };
  }
});
</script>
