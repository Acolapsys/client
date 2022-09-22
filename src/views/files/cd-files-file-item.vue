<template>
  <div
    class="cd-border cd-border-grey-4 cd-bg-white cd-rounded-[10px] cd-px-6 cd-py-5 cd-h-[140px] cd-w-full cd-flex-shrink-0 cd-flex cd-flex-col"
  >
    <div class="cd-flex cd-justify-between">
      <component
        :is="icon"
        class="cd-w-[30px] cd-h-[30px] cd-mb-auto cd-text-blue-light"
      />
      <div class="cd-hidden group-hover:cd-flex">
        <cd-icon-download
          v-if="!isDir"
          class="cd-w-4 cd-h-4 cd-mr-2 cd-flex-none cd-cursor-pointer hover:cd-text-primary"
          @click.stop="downloadFile"
        />
        <cd-icon-delete
          class="cd-w-4 cd-h-4 cd-flex-none cd-cursor-pointer hover:cd-text-primary"
          @click.stop="deleteFile"
        />
      </div>
    </div>
    <p class="cd-text-base-secondary cd-text-sm cd-font-bold">{{ file.name }}</p>
    <p class="cd-text-grey-5 cd-text-[13px]">{{ date }}</p>
    <p v-if="!isDir" class="cd-text-grey-5 cd-text-[13px]">{{ toFileSize(file.size) }}</p>
  </div>
</template>
<script lang="ts" setup>
import { computed, toRefs } from "vue";
import { FileTypes, File } from "@/types/file";
import { useStore } from "@/store";
import { toFileSize } from "@/utils/formats";

//TODO: make truncate for long names

interface Props {
  file: File;
}

const store = useStore();
const props = defineProps<Props>();
const { file } = toRefs(props);
const isDir = computed<boolean>(() => {
  return file.value?.type === FileTypes.DIR;
});

const icon = computed<string>(() => {
  return isDir.value ? "cd-icon-folder" : "cd-icon-file-others";
});
const date = computed<string>(() => {
  return new Date(file.value.createdAt).toLocaleDateString();
});

const downloadFile = async () => {
  await store.dispatch("file/downloadFile", file.value);
};

const deleteFile = async () => {
  if (file.value.type === FileTypes.DIR) {
    await store.dispatch("file/deleteDir", file.value.id);
  } else {
    await store.dispatch("file/deleteFile", file.value.id);
  }
};
</script>
