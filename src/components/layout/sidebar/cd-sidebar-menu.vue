<template>
  <nav class="cd-pt-20">
    <ul class="cd-flex cd-flex-col">
      <li v-for="item in menu" :key="item.id" class="cd-mb-4 cd-flex-shrink-0">
        <cd-sidebar-menu-item :item="item" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { IconMenuItem } from "@/types/menu";

const menu: IconMenuItem[] = [
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
  },
  {
    id: "ui-kit",
    label: "ui-kit",
    icon: "cd-icon-files",
    to: { name: "ui-kit" }
  }
];
</script>
