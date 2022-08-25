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

export enum FileType {
  DIR = "dir",
  FILE = "file"
}
