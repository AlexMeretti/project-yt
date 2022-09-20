import { instance } from "./api";

export const securityAPI = {
  getCaptcha() {
    return instance.get<GetCaptcha>("security/get-captcha-url").then(res => res.data);
  },
};
type GetCaptcha = {
  url: string
}