<template>
  <cd-header />
  <main class="cd-flex-grow cd-bg-grey-background cd-p-6">
    <router-view />
  </main>
  <cd-sidebar />
  <cd-footer />
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useStore } from "@/store";

const store = useStore();
onBeforeMount(() => {
  store.dispatch("user/auth");
});
</script>
