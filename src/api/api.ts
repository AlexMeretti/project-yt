import axios from "axios";
export const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "9efffdef-5861-486d-914b-be04177580a2",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export type BaseResponseType<D = {}> = {
  data: D
  messages: Array<string>
  resultCode: number
}