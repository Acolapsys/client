import { loadFromLocalStorage } from "@/utils/localStorage";
import config from "@/config/config";

const token = () => loadFromLocalStorage(config.TOKEN_STORAGE_KEY);

export default function() {
    return {
        Authorization: `Bearer ${token()}`
      }
}