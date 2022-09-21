<template>
  <div class="cd-border cd-rounded cd-p-2">
    <div class="cd-flex cd-items-center cd-justify-between">
      <span class="cd-pointer-events-none">{{ file.name }}</span>
      <cd-icon-close
        class="cd-w-4 cd-h-4 cd-cursor-pointer"
        @click="deleteUploadedFile"
      />
    </div>
    <cd-progress-bar :percent="file.progress" numerical />
  </div>
</template>
<script lang="ts" setup>
//TODO: truncate long names
import { UploadingFile } from "@/types/file";
import { toRefs } from "vue";

import { useStore } from "@/store";
const store = useStore();

interface Props {
  file: UploadingFile;
}

const props = defineProps<Props>();
const { file } = toRefs(props);

const deleteUploadedFile = () => {
  store.commit("upload/removeUploadFile", file.value.id);
};
</script>
