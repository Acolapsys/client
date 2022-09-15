<template>
  <div
    class="cd-w-full cd-h-full"
    @dragenter.prevent.stop="dragEnterHandler"
    @dragover.prevent.stop="dragEnterHandler"
    @dragleave.prevent.stop="dragLeaveHandler"
    @drop.prevent="dropHandler"
  >
    <cd-files-drop-area v-if="dragEnter" />
    <cd-files v-else />
  </div>
</template>

<script lang="ts" setup>
//TODO: Move drag-n-drop to hook

import { ref, computed } from "vue";
import { useStore } from "@/store";
const store = useStore();
const currentDirId = computed(() => {
  return store.state.file.currentDir?.id;
});

const dragEnter = ref<boolean>(false);

const dragEnterHandler = () => {
  dragEnter.value = true;
};
const dropHandler = async (e: DragEvent): Promise<void> => {
  const target = e.dataTransfer as DataTransfer;
  const files: File[] = [...target.files];
  const len = files.length;
  for (let i = 0; i < len; i++) {
    const file = files[i];
    await store.dispatch("file/uploadFile", { file, dirId: currentDirId.value });
  }
  dragEnter.value = false;
};
const dragLeaveHandler = () => {
  dragEnter.value = false;
};
</script>
