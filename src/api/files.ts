import authorizationHeaders from "@/utils/authorizationHeaders";
import repository from "./repository";

export default {
  getFiles: async (dirId: number) => {
    const url = "api/files";
    const res = await repository.get(url, {
      params: {
        parentId: dirId
      },
      headers:  authorizationHeaders()
    });
    return res.data;
  }
};
