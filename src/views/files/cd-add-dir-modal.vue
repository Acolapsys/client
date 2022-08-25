<template>
  <cd-base-modal :visible="visible" @close="closeModal">
    <form @submit.prevent class="cd-bg-white cd-p-5 cd-rounded-[14px]">
      <h2 class="cd-mb-6">Create directory</h2>
      <cd-input v-model="title" placeholder="Directory title" class="cd-mb-4" />
      <cd-button @click="createDir">Create</cd-button>
    </form>
  </cd-base-modal>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "cd-add-dir-modal",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["create", "update:visible"],
  setup(props, { emit }) {
    const title = ref("");
    const createDir = () => {
      emit("create", title.value);
      title.value = "";
    };

    const closeModal = () => {
      title.value = "";
      emit("update:visible", false);
    };

    return { title, createDir, closeModal };
  }
});
</script>
