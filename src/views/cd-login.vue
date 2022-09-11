<template>
  <div class="cd-w-full cd-h-full">
    <form
      @submit.prevent="onSubmit"
      class="cd-w-[400px] cd-m-auto cd-bg-white cd-p-8 cd-h-full cd-rounded-lg"
    >
      <h3 class="cd-mb-6">Войти</h3>
      <cd-input
        v-model="email"
        v-focus:custom="'#input-native'"
        placeholder="Введите email"
        classes="cd-mb-4"
      />
      <cd-input v-model="password" placeholder="Введите пароль" classes="cd-mb-4" />
      <div class="cd-flex cd-justify-center cd-space-x-4">
        <cd-button class="cd-w-20" type="reset" @click="onCancel">Cancel</cd-button>
        <cd-button class="cd-w-20" @click="onSubmit">Ok</cd-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const email = ref("");
const password = ref("");

const onCancel = (): void => {
  email.value = "";
  password.value = "";
};

const onSubmit = async (): Promise<void> => {
  const userData = {
    email: email.value,
    password: password.value
  };

  const isAuth: boolean = await store.dispatch("user/login", userData);
  if (isAuth) {
    router.push({ name: "home" });
  }
};
</script>
