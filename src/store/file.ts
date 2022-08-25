import api from "@/api";
import { GlobalDataProps } from "@/types/store";
import { FileProps } from "@/types/store/file";
import { File } from "@/types/file";
import { AxiosError, AxiosResponse } from "axios";
import { ActionTree, Module, MutationTree } from "vuex";

const state = (): FileProps => ({
  files: [],
  currentDir: null
});

const mutations = <MutationTree<FileProps>>{
  setFiles(state, files: File[]) {
    state.files = files;
  },
  addFile(state, file: File) {
    state.files.push(file);
  },
  setCurrentDir(state, dir: File) {
    state.currentDir = dir;
  }
};

const actions = <ActionTree<FileProps, GlobalDataProps>>{
  async getFiles({ commit }, dirId) {
    try {
      const files = await api.files.getFiles(dirId);
      commit("setFiles", files);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
    }
  },
  async createDir({ commit }, { dirId, name }) {
    try {
      const file = await api.files.createDir(dirId, name);
      commit("addFile", file);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
    }
  },
  async selectDir({ commit, dispatch }, dirId) {
    try {
      dispatch("getFiles", dirId);
      const fileInfo = await api.files.getFileById(dirId);
      commit("setCurrentDir", fileInfo);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
    }
  }
};

const file: Module<FileProps, GlobalDataProps> = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default file;
