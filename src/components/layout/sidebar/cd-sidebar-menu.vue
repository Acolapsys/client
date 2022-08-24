<template>
  <nav class="cd-pt-20">
    <ul class="cd-flex cd-flex-col">
      <li v-for="item in menu" :key="item.id" class="cd-mb-4 cd-flex-shrink-0">
        <cd-sidebar-menu-item :item="item" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "cd-sidebar-menu",
  setup() {
    const menu = [
      {
        id: "dashboard",
        label: "dashboard",
        icon: "cd-icon-dashboard",
        to: { name: "dashboard" }
      },
      {
        id: "files",
        label: "files",
        icon: "cd-icon-files",
        to: { name: "files" }
      }
    ];
    return { menu };
  }
});
</script>
