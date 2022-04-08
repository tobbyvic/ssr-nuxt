import request from "~/service";

const api = "/api";

export const articles = async (store, params) => {
  return await request.get(`${api}/articles`, params);
};
