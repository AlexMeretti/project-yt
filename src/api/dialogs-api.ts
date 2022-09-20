import {instance } from "./api";

export const dialogsAPI = {
  getDialogs() {
    return instance.get(`dialogs`).then(res => res.data);
  },
  getMessages(userId: number) {
    return instance.get(`dialogs/${userId}/messages`).then(res => res.data);
  },
  startMessaging(userId: number) {
      return instance.put(`dialogs/${userId}`).then(res => console.log(res));
  },
  sendMessage(userId: number, body: string) {
    return instance.post(`dialogs/${userId}/messages`, { body }).then(res => res.data);
},
  deleteMessage(messageId: string) {
  return instance.delete(`dialogs/messages/${messageId}`).then(res => res.data);
}
};