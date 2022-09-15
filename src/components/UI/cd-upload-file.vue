<template>
  <label
    :for="inputId"
    class="cd-transition-all cd-flex cd-items-center cd-justify-center cd-h-10 cd-px-5 cd-rounded-full cd-text-grey-3 cd-border cd-border-grey-2 hover:cd-border-primary hover:cd-bg-primary hover:cd-text-white cd-cursor-pointer"
  >
    <cd-icon-upload-file class="cd-mr-1 cd-w-5 cd-h-5 cd-flex-shrink-0" />
    <span class="cd-font-semibold cd-text-sm cd-leading-[18px]"> Upload </span>

    <input
      :miltiple="multiple"
      type="file"
      :name="inputId"
      :id="inputId"
      class="cd-hidden"
      @change="selectFiles"
    />
  </label>
</template>
<script lang="ts" setup>
import { toRefs, withDefaults } from "vue";
interface Props {
  multiple: boolean;
  inputId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
  inputId: "upload-file"
});
const { multiple, inputId } = toRefs(props);

const emit = defineEmits(["select-files"]);
const selectFiles = (e: Event): void => {
  emit("select-files", e);
};
</script>
