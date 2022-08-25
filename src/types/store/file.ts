import { File } from "../file";

export interface FileProps {
    files: File[];
    currentDir: File | null;
}