<template>
  <div
    class="cd-flex cd-items-center cd-h-10 cd-px-5 cd-rounded-full cd-font-semibold cd-text-sm cd-leading-[18px] cd-text-grey-3 cd-border cd-border-grey-2 hover:cd-border-primary hover:cd-bg-primary hover:cd-text-white cd-cursor-pointer"
  >
    <cd-icon-upload-file class="cd-mr-[10px] cd-w-5 cd-h-5 cd-flex-shrink-0" />
    <label for="upload-file" class="cd-cursor-pointer">Upload</label>
    <input
      :miltiple="multiple"
      type="file"
      name="upload-file"
      id="upload-file"
      class="cd-hidden"
      @change="selectFiles"
    />
  </div>
</template>
<script lang="ts" setup>
import { toRefs, withDefaults } from "vue";
interface Props {
  multiple: boolean;
}

const props = withDefaults(defineProps<Props>(), { multiple: false });
const { multiple } = toRefs(props);

const emit = defineEmits(["select-files"]);
const selectFiles = (e: Event): void => {
  emit("select-files", e);
};
</script>
