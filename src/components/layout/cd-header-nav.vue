<template>
  <nav>
    <ul class="cd-flex">
      <li v-for="item in menu" :key="item.id" class="cd-mr-3">
        <router-link :to="item.to">
          <cd-button @click="menuClick(item)">
            <span>{{ item.label }}</span>
          </cd-button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import { useRouter, RouteLocationRaw } from "vue-router";

type menuItemType = {
  id: string;
  label: string;
  to: RouteLocationRaw;
};

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const isAuth = computed(() => store.state.user.isAuth);
    const menu = computed(() => {
      return isAuth.value
        ? [
            {
              id: "logout",
              label: "Logout",
              to: ""
            }
          ]
        : [
            {
              id: "register",
              label: "Register",
              to: { name: "register" }
            },
            {
              id: "login",
              label: "Login",
              to: { name: "login" }
            }
          ];
    });

    const menuClick = (item: menuItemType) => {
      if (item.id === "logout") {
        store.dispatch("user/logout");
        router.push({ name: "login" });
      }
    };
    return { menu, menuClick };
  }
});
</script>
