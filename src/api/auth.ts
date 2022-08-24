import repository from "./repository";
import authorizationHeaders from "@/utils/authorizationHeaders";


export default {
  register: async ({ email, password }: { email: string; password: string }) => {
    const url = "api/auth/register";
    const res = await repository.post(url, {
      email,
      password
    });
    return res.data;
  },
  login: async ({ email, password }: { email: string; password: string }) => {
    const url = "api/auth/login";
    const res = await repository.post(url, {
      email,
      password
    });
    return res.data;
  },
  auth: async () => {
    const url = "api/auth/auth";
    const res = await repository.get(url,
      {
      headers: authorizationHeaders()
  }
    )
    
    return res.data;
  }
};
