<template>
  <cd-base-modal :visible="visible" @close="closeModal">
    <form @submit.prevent class="cd-bg-white cd-p-5 cd-rounded-[14px]">
      <h2 class="cd-mb-6">Create directory</h2>
      <cd-input v-model="title" placeholder="Directory title" class="cd-mb-4" />
      <cd-button @click="createDir">Create</cd-button>
    </form>
  </cd-base-modal>
</template>
<script lang="ts" setup>
import { withDefaults, ref, toRefs } from "vue";

interface Props {
  visible: boolean;
}

const props = withDefaults(defineProps<Props>(), { visible: false });
const { visible } = toRefs(props);
const emit = defineEmits(["create", "update:visible"]);

const title = ref("");
const createDir = () => {
  emit("create", title.value);
  title.value = "";
};

const closeModal = () => {
  title.value = "";
  emit("update:visible", false);
};
</script>
