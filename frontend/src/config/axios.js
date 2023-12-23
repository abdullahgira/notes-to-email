import Axios from "axios";
import { getAuth } from "firebase/auth";

Axios.defaults.baseURL = process.env.API;

const AuthAxios = Axios.create();

AuthAxios.interceptors.request.use(async (config) => {
  /* some logic */
  const controller = new AbortController();
  const idToken = await getAuth().currentUser?.getIdToken();

  if (!idToken) controller.abort(`Invalid user`);

  config.headers = {
    Authorization: idToken,
  };

  return {
    ...config,
    signal: controller.signal,
  };
});

export const axios = Axios;
export const authAxios = AuthAxios;
