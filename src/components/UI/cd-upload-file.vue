<template>
  <div
    class="cd-flex cd- items-center cd-py-3 cd-px-5 cd-rounded-full cd-font-semibold cd-text-sm cd-leading-[18px] cd-text-grey-3 cd-rounded-1/2 cd-border cd-border-grey-2 hover:cd-border-none hover:cd-bg-primary hover:cd-text-white cd-cursor-pointer"
  >
    <cd-icon-upload-file class="cd-mr-[10px] cd-w-5 cd-h-5 cd-flex-shrink-0" />
    <label for="upload-file" class="cd-cursor-pointer">Upload</label>
    <input
      :miltiple="multiple"
      type="file"
      name="upload-file"
      id="upload-file"
      class="cd-hidden"
      @change="$emit('select-files', $event)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "cd-upload-file",
  props: {
    multiple: {
      type: Boolean,
      default: false
    }
  },
  emits: ["select-files"],
  setup() {
    return {};
  }
});
</script>
