<template>
  <div class="cd-flex cd-justify-between cd-mb-8">
    <h1 class="cd-font-bold cd-text-3xl cd-leading-10">Files</h1>
    <div class="cd-flex">
      <cd-button active class="cd-mr-4" @click="openModal">
        <span>+ Create new dir</span>
      </cd-button>
      <!-- <cd-button class="cd-flex cd-text-grey-3" @click="uploadFile">
        <cd-icon-upload-file class="cd-mr-[10px] cd-w-5 cd-h-5 cd-flex-shrink-0" />
        <span>Upload</span>
      </cd-button> -->
      <cd-upload-file @select-files="uploadFile" multiple />
    </div>
  </div>
  <cd-files-file-list :files="files" />
  <cd-add-dir-modal v-model:visible="isCreateModalVisible" @create="createDir" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed, ref } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "cd-files",
  setup() {
    const store = useStore();
    const files = computed(() => {
      return store.state.file.files;
    });

    const currentDirId = computed(() => {
      return store.state.file.currentDir?.id;
    });
    onBeforeMount(async () => {
      await store.dispatch("file/getFiles", currentDirId.value);
    });
    const isCreateModalVisible = ref(false);
    const openModal = () => {
      isCreateModalVisible.value = true;
    };
    const createDir = async (title: string) => {
      await store.dispatch("file/createDir", { dirId: currentDirId.value, name: title });
      isCreateModalVisible.value = false;
    };

    const uploadFile = async (e: Event) => {
      console.log(e);
      const target = e.target as HTMLInputElement;
      const files: FileList = target.files as FileList;
      const len = files.length;
      for (let i = 0; i < len; i++) {
        const file = files[i];
        await store.dispatch("file/uploadFile", { file, dirId: currentDirId.value });
      }
    };

    return { files, createDir, isCreateModalVisible, openModal, uploadFile };
  }
});
</script>
