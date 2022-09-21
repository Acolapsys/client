export type File = {
  id: number;
  name: string;
  accessLink: string;
  type: string;
  size: number;
  userId: number;
  parentId: number;
  createdAt: Date;
  rootUserId: number
};

export enum FileTypes {
  DIR = "dir",
  FILE = "file"
}

export type UploadingFile = {
  id: number;
  name: string;
  progress: number;
}