<template>
  <div class="cd-rounded-[14px] cd-bg-white cd-p-6">
    <div class="cd-flex cd-items-center cd-mb-4 cd-flex-shrink-0">
      <cd-button class="cd-mr-6" rounded active @click="toParentDir"
        >{{ "<" }} Back</cd-button
      >
      <span>{{ currentDir.name || "root" }}</span>
    </div>

    <div
      class="cd-rounded-[14px] cd-grid cd-grid-cols-1 md:cd-grid-cols-2 lg:cd-grid-cols-3 cd-gap-5"
    >
      <p v-if="files.length === 0">Файлы отсутствуют</p>
      <cd-files-file-item
        v-else
        v-for="file in files"
        :key="file.id"
        :file="file"
        class="cd-cursor-pointer cd-transition hover:cd-scale-[1.01] hover:cd-shadow"
        @click="selectDir(file)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";
import { File, FileType } from "@/types/file";
import { useStore } from "@/store";

interface Props {
  files: File[];
}

const props = defineProps<Props>();
const { files } = toRefs(props);

const store = useStore();
const currentDir = computed<File | null>(() => {
  return store.state.file.currentDir;
});
const toParentDir = (): void => {
  if (currentDir.value?.rootUserId) return;
  store.dispatch("file/selectDir", currentDir.value?.parentId);
};

const selectDir = (file: File): void => {
  if (file.type === FileType.DIR) {
    store.dispatch("file/selectDir", file.id);
  }
};
</script>
