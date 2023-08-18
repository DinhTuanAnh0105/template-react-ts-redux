import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants/apis";
import { PathRoute } from "../constants/router/path";

const USER_STORAGE = "USER_STORAGE";
class Services {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      timeout: 60000,
    });
    // this.axios.defaults.withCredentials = true;

    this.axios.interceptors.response.use(
      function (response: any) {
        // Do something before request is sent
        // const nextResponse = cloneDeep(response);
        // nextResponse.data = nextResponse?.data?.data;
        
        return response;
        
      },
      function (error: any) {
        
        if(error?.response?.status === 401){
          window.localStorage.removeItem(USER_STORAGE);
          window.location.href = PathRoute.Login;
        }else{
          return Promise.reject(error);

        }
        
      }
    );
  }

  attachTokenToHeader(token: string) {
    this.axios.interceptors.request.use(
      function (config: any) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      function (error: any) {
        return Promise.reject(error);
      }
    );
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.axios.get(url, config);
  }

  post(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.post(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.axios.delete(url, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.put(url, data, config);
  }

  patch(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.patch(url, data, config);
  }
}

export default new Services();
