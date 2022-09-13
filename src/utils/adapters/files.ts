import { FileTypes, File } from "@/types/file";

const convertGetFiles = (files: File[]): File[] => {
  const sortFunc = (x: File, y: File): number => {
    if (x.type === FileTypes.DIR && y.type === FileTypes.DIR) return 0;
    if (y.type === FileTypes.DIR) return 1;
    return -1;
  };
  return files.sort(sortFunc);
};

export { convertGetFiles };
