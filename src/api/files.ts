import { FileType } from "@/types/file";
import authorizationHeaders from "@/utils/authorizationHeaders";
import repository from "./repository";

export default {
  getFiles: async (dirId: number) => {
    const url = "api/files";
    const res = await repository.get(url, {
      params: {
        parentId: dirId
      },
      headers: authorizationHeaders()
    });
    return res.data;
  },
  getFileById: async (dirId: number) => {
    const url = "api/files/file";
    const res = await repository.get(url, {
      params: {
        id: dirId
      },
      headers: authorizationHeaders()
    });
    return res.data;
  },
  createDir: async (dirId: number, name: string) => {
    const url = "api/files";
    const res = await repository.post(
      url,
      {
        parentId: dirId,
        name,
        type: FileType.DIR
      },
      {
        headers: authorizationHeaders()
      }
    );
    return res.data;
  },
  uploadFile: async (formData: FormData) => {
    const url = "api/files/upload";
    const isNumber = (val: any): val is number => typeof val === "number";

    const onUploadProgress = (progressEvent: ProgressEvent) => {
      const totalLength = progressEvent.lengthComputable
        ? progressEvent.total
        : (<XMLHttpRequest>progressEvent?.target)?.getResponseHeader("content-length") ||
          (<XMLHttpRequest>progressEvent?.target)?.getResponseHeader(
            "x-decompressed-content-length"
          );
      console.log("total", totalLength);
      if (isNumber(totalLength) && totalLength !== 0) {
        const progress = Math.round((progressEvent.loaded * 100) / totalLength);
        console.log(progress);
      }
    };

    const res = await repository.post(url, formData, {
      headers: {
        ...authorizationHeaders(),
        enctype: "multipart/form-data; charset=utf-8"
      },
      onUploadProgress
    });
    return res.data;
  }
};
