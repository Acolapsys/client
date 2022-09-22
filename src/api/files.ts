import { FileTypes,  UploadingFile } from "@/types/file";
import { convertGetFiles } from "@/utils/adapters/files";
import authorizationHeaders from "@/utils/authorizationHeaders";
import repository from "./repository";



export default {
  getFiles: async ({ dirId, sort }: { dirId: number, sort: string }) => {
    const url = "api/files";
    const res = await repository.get(url, {
      params: {
        parentId: dirId,
        sort
      },
      headers: authorizationHeaders()
    });
    
    return convertGetFiles(res.data, sort);
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
        type: FileTypes.DIR
      },
      {
        headers: authorizationHeaders()
      }
    );
    return res.data;
  },
  uploadFile: async (
    formData: FormData,
    uploadFile: UploadingFile,
    callback: (file: UploadingFile) => void
  ) => {
    const url = "api/files/upload";
    const isNumber = (val: any): val is number => typeof val === "number";

    const onUploadProgress = (progressEvent: ProgressEvent) => {
      const totalLength = progressEvent.lengthComputable
        ? progressEvent.total
        : (<XMLHttpRequest>progressEvent?.target)?.getResponseHeader("content-length") ||
          (<XMLHttpRequest>progressEvent?.target)?.getResponseHeader(
            "x-decompressed-content-length"
          );
      if (isNumber(totalLength) && totalLength !== 0) {
        uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength);
        callback(uploadFile);
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
  },
  async downloadFile(fileId: number): Promise<Blob> {
    const url = "api/files/download";
    const res = await repository.get(url, {
      params: {
        id: fileId
      },
      headers: authorizationHeaders(),
      responseType: "blob"
    });
    return res.data;
  },
  async delete(fileId: number, type?: string) {
    const url = "api/files/delete";
    const res = await repository.delete(url, {
      params: {
        id: fileId,
        type
      },
      headers: authorizationHeaders()
    });
    return res.data;
  }
};
