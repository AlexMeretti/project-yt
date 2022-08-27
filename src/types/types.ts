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
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
export type PostsType = {
    id: number
    author: string
    message: string
    likes: number
    avatar?: string | null
  }
export type MessagesType = {
    id: string,
    message: string
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