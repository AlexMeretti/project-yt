import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "aa6a69fa-19c4-4cbc-9147-a2b1bc2360d9",
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
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put("profile/status/", { status });
  },
};

export const authAPI = {
  getAuthData() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
