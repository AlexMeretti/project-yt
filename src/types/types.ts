export type PhotosType = {
    small: string | null
    large: string | null
  }
export type CurrentUsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
    uniqueUrlName: string
  }
export type AuthProfileType = {
    id: number
    email: string
    login: string
    isAuth: boolean
  }
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
  }
export  type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
  }
export type PostsType = {
    id: number
    author: string
    message: string
    likes: number
    avatar?: string | null
  }

export type FriendsType = {
    id: string,
    name: string,
    photo: string
  }

export type MenuType = {
  id: number
  link: string
  name: string
}
export type FiltersType = {
  term: string
  friend: null | boolean
}
export type DialogsType = {
  hasNewMessages: boolean
  id: number
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: {small: null | string, large: null | string}
  userName: string
}
export type MessagesType = {
  addedAt: string
  body: string
  id: string
  recipientId: number
  senderId: number
  senderName: string
  translatedBody: any
  viewed: boolean
}