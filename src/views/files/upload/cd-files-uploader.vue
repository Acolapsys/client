<template>
  <div
    class="cd-flex cd-flex-col cd-w-[300px] cd-h-[300px] cd-overflow-y-hidden cd-fixed cd-bottom-2 cd-right-4 cd-border cd-p-3 cd-bg-white cd-rounded-md"
    v-if="isUploaderVisible"
  >
    <div class="cd-flex cd-items-center cd-justify-between cd-mb-4 cd-flex-none">
      <div>Uploads</div>
      <cd-icon-close class="cd-cursor-pointer" @click="closeUploader" />
    </div>
    <div class="cd-overflow-y-auto cd-flex-1 cd-p-1">
      <cd-files-uploader-item
        v-for="file in uploadingFiles"
        :key="file.id"
        :file="file"
        class="cd-mb-1"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/store";

const store = useStore();

const isUploaderVisible = computed(() => {
  return store.state.upload.isVisible;
});

const closeUploader = () => {
  store.commit("upload/setVisible", false);
};

const uploadingFiles = computed(() => {
  return store.state.upload.files;
});
</script>
