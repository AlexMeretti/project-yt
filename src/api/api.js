import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "9efffdef-5861-486d-914b-be04177580a2",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});
export const usersAPI = {
  getUsers(usersActivePage, usersPerPage) {
    return instance
      .get(`users?page=${usersActivePage}&count=${usersPerPage}`)
      .then((response) => {
        return response.data;
      });
  },
  usersChangePage(page, usersPerPage) {
    return instance
      .get(`users?page=${page}&count=${usersPerPage}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  setProfileData(profile) {
    return instance.put(`profile/`, profile);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put("profile/status/", { status });
  },
  updateAvatar(avatar) {
    return instance.put(
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

export const authAPI = {
  getAuthData() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe, captcha) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
export const securityAPI = {
  getCaptcha() {
    return instance.get("security/get-captcha-url");
  },
};
