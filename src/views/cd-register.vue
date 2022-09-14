<template>
  <div class="cd-w-full cd-h-full">
    <form
      @submit.prevent
      class="cd-w-[400px] cd-m-auto cd-bg-white cd-p-8 cd-h-full cd-rounded-lg"
    >
      <h3 class="cd-mb-6">Регистрация</h3>
      <cd-input
        v-model="email"
        v-focus:custom="'input-native'"
        placeholder="Введите email"
        classes="cd-mb-4"
        type="email"
      />
      <cd-input
        v-model="password"
        placeholder="Введите пароль"
        classes="cd-mb-4"
        type="password"
      />
      <div class="cd-flex cd-justify-center cd-space-x-4">
        <cd-button class="cd-w-20" @click="onCancel">Cancel</cd-button>
        <cd-button class="cd-w-20" @click="onSubmit">Ok</cd-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "@/store";

const store = useStore();
const email = ref("");
const password = ref("");

const onCancel = () => {
  email.value = "";
  password.value = "";
};

const onSubmit = async (): Promise<void> => {
  await store.dispatch("user/register", {
    email: email.value,
    password: password.value
  });
};
</script>
