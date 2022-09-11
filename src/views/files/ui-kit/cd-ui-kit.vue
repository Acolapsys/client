<template>
  <h1 class="cd-font-bold cd-text-3xl cd-leading-10 cd-mb-2">UI Kit</h1>

  <h2 class="cd-mb-2">Buttons</h2>
  <div class="cd-flex cd-flex-wrap cd-space-x-4 cd-mb-2">
    <cd-button>Default</cd-button>
    <cd-button rounded>Rounded</cd-button>
    <cd-button primary>Primary</cd-button>
    <cd-button disabled>Disabled</cd-button>
    <cd-button primary disabled>Disabled</cd-button>
  </div>

  <div>
    <h2 class="cd-mb-2">Single checkbox</h2>

    <cd-checkbox
      v-model="firstCheckbox"
      label="First Checkbox"
      id="FirstCheckbox"
      name="FirstCheckbox"
      class="cd-mb-2"
    />
    <h2 class="cd-mb-2">Multiple checkboxes</h2>
    <div class="cd-flex cd-flex-col">
      <cd-checkbox
        v-for="item in options"
        :key="item"
        v-model="checksValue"
        :value="item"
        :label="item"
        :id="item"
        :name="item"
        class="cd-mb-2"
      />
    </div>
    <h2 class="cd-mb-2">Disabled checkboxes</h2>
    <cd-checkbox
      v-model="firstCheckbox"
      label="Disabled Checkbox"
      id="DisabledCheckbox"
      name="DisabledCheckbox"
      class="cd-mb-2"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const firstCheckbox = ref<boolean>(false);
const options = ["Alice", "Carl", "John"];
const checksValue = ref([]);
</script>
