<template>
  <header
    class="cd-flex cd-items-center cd-justify-around cd-h-[76px] cd-w-full cd-bg-white cd-flex-shrink-0"
  >
    <cd-input icon="cd-icon-search" iconClasses="cd-text-grey-1" v-model="searchQuery" />
    <cd-header-nav />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "cd-header",
  setup() {
    const searchQuery = ref("");
    return { searchQuery };
  }
});
</script>
