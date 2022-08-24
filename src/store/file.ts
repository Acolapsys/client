import api from "@/api";
import { GlobalDataProps } from "@/types/store";
import { FileProps } from "@/types/store/file";
import { File } from "@/types/user";
import { AxiosError, AxiosResponse } from "axios";
import { ActionTree, Module, MutationTree } from "vuex";

const state = (): FileProps => ({
  files: [],
  currentDir: null

})

const mutations = <MutationTree<FileProps>>{
  setFiles(state, files: File[]) {
    state.files = files;
  },
  setCurrentDir(state, dir: number) {
    state.currentDir = dir;
  }
};

const actions = <ActionTree<FileProps, GlobalDataProps>>{
  async getFiles({ commit }, dirId) {
    
    try {
      const files = await api.files.getFiles(dirId)
      commit('setFiles', files)
    
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
    }
  },
}

const file: Module<FileProps, GlobalDataProps> ={
  namespaced: true,
  state,
  mutations,
  actions
};

export default file
