<template>
  <div class="cd-rounded-[14px] cd-bg-white cd-p-6">
    <div class="cd-flex cd-items-center cd-justify-between cd-mb-4 cd-flex-shrink-0">
      <div class="cd-flex cd-items-center">
        <cd-button class="cd-mr-6" rounded active @click="toParentDir"
          >{{ "<" }} Back</cd-button
        >
        <span>{{ currentDir.name || "root" }}</span>
      </div>
      <select name="sort" id="sort" v-model="sortField" @change="changeSorting">
        <option value="name">By name</option>
        <option value="type">By type</option>
        <option value="createdAt">By date</option>
      </select>
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
        class="cd-group cd-cursor-pointer cd-transition hover:cd-shadow"
        @click="selectDir(file)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
//TODO: make enum to sorting values
//TODO: make custom select

import { computed, ref, toRefs } from "vue";
import { File, FileTypes } from "@/types/file";
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
const sortField = ref("name");
const changeSorting = () => {
  store.dispatch("file/selectDir", {
    dirId: currentDir.value?.id,
    sort: sortField.value
  });
};

const toParentDir = (): void => {
  if (currentDir.value?.rootUserId) return;
  store.dispatch("file/selectDir", {
    dirId: currentDir.value?.parentId,
    sort: sortField.value
  });
};

const selectDir = (file: File): void => {
  if (file.type === FileTypes.DIR) {
    store.dispatch("file/selectDir", { dirId: file.id, sort: sortField.value });
  }
};
</script>
