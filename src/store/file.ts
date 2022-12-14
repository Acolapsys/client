import api from "@/api";
import { GlobalDataProps } from "@/types/store";
import { FileProps } from "@/types/store/file";
import { File as FileModel, FileTypes, UploadingFile } from "@/types/file";
import { AxiosError, AxiosResponse } from "axios";
import { ActionTree, Module, MutationTree } from "vuex";
import files from "@/api/files";

const state = (): FileProps => ({
  files: [],
  currentDir: null
});

const mutations = <MutationTree<FileProps>>{
  setFiles(state, files: FileModel[]) {
    state.files = files;
  },
  addFile(state, file: FileModel) {
    state.files.push(file);
  },
  setCurrentDir(state, dir: FileModel) {
    state.currentDir = dir;
  },
  deleteFile(state, fileId: number) {
    const idx = state.files.findIndex((file: FileModel) => file.id === fileId);
    if (idx !== -1) {
      state.files.splice(idx, 1);
    }
  }
};

const actions = <ActionTree<FileProps, GlobalDataProps>>{
  async getFiles({ commit }, { dirId, sort = "name" }) {
    try {
      const files = await api.files.getFiles({ dirId, sort });
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
  async selectDir({ commit, dispatch }, { dirId, sort }) {
    try {
      dispatch("getFiles", { dirId, sort });
      const fileInfo = await api.files.getFileById(dirId);
      commit("setCurrentDir", fileInfo);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
    }
  },
  async uploadFile({ commit }, { file, dirId }: { file: string | Blob; dirId: number }) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      if (typeof dirId === "number" && dirId) {
        formData.append("parentId", dirId.toString());
      }

      const uploadFile: UploadingFile = {
        name: (file as File).name,
        progress: 0,
        id: Date.now()
      };

      commit("upload/setVisible", true, { root: true });
      commit("upload/addUploadFile", uploadFile, { root: true });
      const changeCallback = (file: UploadingFile) => {
        commit("upload/changeUploadFile", file, { root: true });
      };

      const response = await api.files.uploadFile(formData, uploadFile, changeCallback);

      commit("addFile", response);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
    }
  },
  async downloadFile(_, file: FileModel) {
    try {
      const res = await api.files.downloadFile(file.id);

      const href = URL.createObjectURL(res);
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", file.name);
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(href);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
    }
  },
  async deleteFile({ commit }, fileId): Promise<void> {
    try {
      await api.files.delete(fileId);
      commit("deleteFile", fileId);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const result: AxiosResponse | undefined = e.response;

        console.log(result?.data?.message);
      }
    }
  },
  async deleteDir({ commit }, fileId): Promise<void> {
    try {
      await api.files.delete(fileId, FileTypes.DIR);
      commit("deleteFile", fileId);
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
