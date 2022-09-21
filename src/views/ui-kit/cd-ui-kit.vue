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

    <h2 class="cd-mb-2">Radio Buttons</h2>
    <div class="cd-flex cd-flex-col">
      <cd-radio-button
        v-for="item in options"
        v-model="radioValue"
        :key="item"
        :value="item"
        :label="item"
        :id="item"
        name="users"
        class="cd-mb-2"
      />
      <h2 class="cd-mb-2">Disabled radio</h2>
      <cd-radio-button
        v-for="item in options"
        v-model="radioValue"
        :key="item"
        :value="item"
        :label="item"
        :id="item"
        name="users"
        class="cd-mb-2"
        disabled
      />
    </div>
    <h2 class="cd-mb-2">Switch</h2>
    <div class="cd-flex cd-flex-col cd-mb-2">
      <cd-switch v-model="switchValue" label="I'm up to no good" class="cd-mb-2" />
      <cd-switch v-model="switchValue" label="Disabled" disabled />
    </div>
    <h2 class="cd-mb-2">Progress Bar with text</h2>
    <cd-progress-bar :percent="Number(40)" class="cd-w-[400px] cd-mb-2" numerical />
    <h2 class="cd-mb-2">Progress Bar</h2>
    <cd-progress-bar :percent="Number(40)" class="cd-w-[400px]" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const firstCheckbox = ref<boolean>(false);
const options = ["Alice", "Carl", "John"];
const checksValue = ref([]);
const radioValue = ref<string>("John");
const switchValue = ref(false);
</script>
