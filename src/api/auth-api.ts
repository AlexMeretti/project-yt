import { BaseResponseType, instance } from "./api";

export const authAPI = {
  getAuthData() {
    return instance.get<BaseResponseType<GetAuthData>>(`auth/me`).then(res => res.data);
  },
  login(email: string, password: string, rememberMe: boolean, captcha: string) {
    return instance.post<BaseResponseType<LoginTypes>>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {return instance.delete<BaseResponseType>(`auth/login`);},
};
type GetAuthData = {
  id: number
  email: string
  login: string
}
type LoginTypes = {
  userId: number
}
