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
  }
};
