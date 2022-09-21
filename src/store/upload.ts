import { GlobalDataProps } from "@/types/store";
import { UploadProps } from "@/types/store/upload";
import { UploadingFile } from "@/types/file";
import { ActionTree, Module, MutationTree } from "vuex";

const state = (): UploadProps => ({
  files: [],
  isVisible: false
});

const mutations = <MutationTree<UploadProps>>{
  setVisible(state, payload: boolean) {
    state.isVisible = payload;
  },
  addUploadFile(state, file: UploadingFile) {
    state.files.push(file);
  },
  removeUploadFile(state, id: number) {
    state.files = state.files.filter((el) => el.id !== id);
  },
  changeUploadFile(state, file: UploadingFile) {
    state.files = state.files.map((el) =>
      el.id === file.id ? { ...el, progress: file.progress } : el
    );
  }
};

const actions = <ActionTree<UploadProps, GlobalDataProps>>{};

const upload: Module<UploadProps, GlobalDataProps> = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default upload;
