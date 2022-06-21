import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((res) => {
  return res;
});

const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const { data } = await instance.request<T>(config);
  return data;
};

export default request;
