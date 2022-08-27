import { ProfileType } from './../types/types';
import { BaseResponseType, instance } from "./api";

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<ProfileType>(`profile/` + userId).then(res => res.data);
  },
  setProfileData(profile: ProfileType) {
    return instance.put<BaseResponseType>(`profile/`, profile);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/` + userId);
  },
  updateStatus(status: string) {
    return instance.put<BaseResponseType>("profile/status/", { status });
  },
  updateAvatar(avatar: File) {
    return instance.put<BaseResponseType>(
      "/profile/photo",
      {
        image: avatar,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};

