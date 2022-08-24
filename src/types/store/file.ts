import { File } from "../user";

export interface FileProps {
    files: File[];
    currentDir: number | null;
}