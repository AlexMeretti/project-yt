import { CurrentUsersType } from "../types/types";
import { BaseResponseType, instance } from "./api";

export const usersAPI = {
  getUsers(page: number, perPage: number, term: string, friend: null | boolean) {
    return instance
      .get<GetUsersTypes>(`users?page=${page}&count=${perPage}&term=${term}&friend=${friend}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId: number) {
    return instance.post<BaseResponseType>(`follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance.delete<BaseResponseType>(`follow/${userId}`);
  },
};

type GetUsersTypes = {
  error: string
  items: Array<CurrentUsersType>
  totalCount: any
}