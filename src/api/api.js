import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '3835033e-7e15-405d-977a-d647f22572da',
  },
})

export const usersApiPage = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data
      })
  },
  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data
    })
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data
    })
  },
}

export const profileApiPage = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data
    })
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId).then((response) => {
      return response.data
    })
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => {
        return response.data
      })
  },
  savePhoto(photoFile) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        return response.data
      })
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile).then((response) => response.data)
  },
}

export const authApi = {
  authData() {
    return instance.get(`auth/me`).then((response) => {
      return response.data
    })
  },
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => {
        return response.data
      })
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data
    })
  },
}
