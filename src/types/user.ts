export type User = {
  id: number;
  email: string;
  password: string;
  diskSpace: number;
  usedSpace: number;
  avatar: string;
  
};

export type File = {
  id: number;
  name: string;
  accessLink: string;
  type: string;
  size: number;
  userId: number;
  parentId: number;
  createdAt: Date;
};
