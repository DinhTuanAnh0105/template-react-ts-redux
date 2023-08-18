import { isString } from "lodash";
import { AuthApi, BASE_URL } from "../constants/apis";
import { ResponseGenerator } from "../interfaces";
import httpService from "./httpMethod";

const USER_STORAGE = "USER_STORAGE";

export type AuthSignInI = ResponseGenerator<{
  user: {
    email: string;
    fullname: string;
  };
  access_token: string;
}>;
class AuthService {
  login(data: { username: string; password: string }): Promise<any> {
    return httpService.post(`${BASE_URL}${AuthApi.LOGIN}`, data);
  }

  putUserToStorage(data?: any) {
    window.localStorage.setItem(USER_STORAGE, JSON.stringify(data));
  }

  getUserInStorage() {
    const user = window.localStorage.getItem(USER_STORAGE);
    if (user && isString(user)) {
      return JSON.parse(user);
    }

    return null;
  }

  clearUser() {
    window.localStorage.removeItem(USER_STORAGE);
  }
}

export default new AuthService();
