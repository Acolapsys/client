<template>
  <div class="cd-overflow-hidden cd-pointer-events-none">
    <span v-if="numerical" class="cd-w-full cd-text-center cd-block">{{ percent }}%</span>
    <div class="cd-h-[10px] cd-w-full cd-bg-primary cd-bg-opacity-30 cd-rounded-full">
      <div
        class="cd-bg-primary cd-h-full cd-rounded-full"
        :style="`width: ${percent}%;`"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

const props = defineProps({
  percent: {
    type: Number,
    required: true,
    validator: (val: number) => {
      return val >= 0 && val <= 100;
    }
  },
  numerical: {
    type: Boolean,
    default: false
  }
});
const { percent, numerical } = toRefs(props);
</script>
