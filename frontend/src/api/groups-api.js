import { authAxios } from "src/config/axios";

export const groupsApi = {
  getAll: () => {
    return authAxios.get("/");
  },
};
