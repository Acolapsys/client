<template>
  <router-link :to="item.to">
    <div
      class="cd-transition-colors cd-group cd-flex cd-items-center cd-justify-center cd-w-[45px] cd-h-[45px] hover:cd-bg-primary hover:cd-shadow-sidebar cd-rounded-[14px]"
    >
      <component
        :is="item.icon"
        class="cd-h-5 cd-w-5 cd-flex-shrink-0 cd-text-grey-dark cd-m-auto cd-align-middle group-hover:cd-text-white"
      />
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import { IconMenuItem } from "@/types/menu";

const props = defineProps<{ item: IconMenuItem }>();

const { item } = toRefs(props);
</script>
