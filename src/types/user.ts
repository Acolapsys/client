export type User = {
  id: number;
  email: string;
  password: string;
  diskSpace: number;
  usedSpace: number;
  avatar: string;
  
};

export type UserRequest = {
  email: string;
  password: string;  
};

