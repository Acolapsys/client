import { User } from "@/types/user";

export interface UserProps {
    currentUser: User | null,
    isAuth: boolean
  }