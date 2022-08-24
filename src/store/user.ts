import api from "@/api";
import { GlobalDataProps } from "@/types/store";
import { UserProps } from "@/types/store/user";
import { User } from "@/types/user";
import { removeFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";
import { AxiosError, AxiosResponse } from "axios";

import { Module, MutationTree, ActionTree } from "vuex";

import config from "@/config/config";

const state = (): UserProps => ({
  currentUser: null,
  isAuth: false
});

const mutations = <MutationTree<UserProps>>{
  setUser(state, user: User) {
    state.currentUser = user;
  },
  setIsAuth(state, payload: boolean) {
    state.isAuth = payload;
  }
};

const actions = <ActionTree<UserProps, GlobalDataProps>>{
  async login({ commit }, { email, password }: User) {
    try {
      const res = await api.auth.login({
        email,
        password
      });
      commit("setUser", res.user);
      commit("file/setCurrentDir", res.user?.rootDirId || null, {root: true});
      commit("setIsAuth", true);
      saveToLocalStorage(config.TOKEN_STORAGE_KEY, res.token);
      return true;
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
    }
  },
  async auth({ commit }) {
    try {
      const res = await api.auth.auth();
      console.log('res', res);
      

      commit("setUser", res.user);
      commit("file/setCurrentDir", res.user?.rootDirId || null, {root: true});

      commit("setIsAuth", true);
      saveToLocalStorage(config.TOKEN_STORAGE_KEY, res.token);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
      removeFromLocalStorage(config.TOKEN_STORAGE_KEY);
    }
  },
  async register(_, { email, password }: User) {
    try {
      const user = await api.auth.register({
        email,
        password
      });
      return user;
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
    }
  },
  logout({ commit }) {
    commit("setUser", null);
    commit("setIsAuth", false);
    removeFromLocalStorage(config.TOKEN_STORAGE_KEY);
  }
};

const user: Module<UserProps, GlobalDataProps> = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default user;
