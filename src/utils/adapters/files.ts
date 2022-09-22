import { FileTypes, File } from "@/types/file";



//TODO: make enum to sorting values
const convertGetFiles = (files: File[], sort: string): File[] => {
  const dirs = files.filter((file) => file.type === FileTypes.DIR);
  if (sort === "type") {
    dirs.sort((x, y) => {
      if (x.name > y.name) return 1;
      if (x.name < y.name) return -1;
      return 0;
    });
  }
  const notDirs = files.filter((file) => file.type !== FileTypes.DIR);
  return [...dirs, ...notDirs];
};

export { convertGetFiles };
