import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import user from "@/store/user";
import file from "@/store/file";
import upload from "@/store/upload";
import { GlobalDataProps } from '@/types/store';

// Define Injection Key
export const key: InjectionKey<Store<GlobalDataProps>> = Symbol()

export default createStore<GlobalDataProps>({
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    file,
    upload
  }
});

export function useStore(): Store<GlobalDataProps> {
  return baseUseStore(key)
}