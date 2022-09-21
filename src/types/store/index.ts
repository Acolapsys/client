import { FileProps } from "./file";
import { UserProps } from "./user";
import { UploadProps } from "./upload";

export interface GlobalDataProps {
    user: UserProps;
    file: FileProps;
    upload: UploadProps;
}

