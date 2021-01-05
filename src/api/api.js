import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': 'badc02b6-66a7-4ba0-906d-91a2cbd8d715'
  }
})

const baseURL = new URL('https://social-network.samuraijs.com/api/1.0/')

export const usersAPI = {
  async getUsers(currentPage, usersPerPage) {
    const url = new URL('users', baseURL)
    url.searchParams.append('count', usersPerPage)
    url.searchParams.append('page', currentPage)

    const responce = await instance.get(url)
    return responce.data
  }
}

export const profileAPI = {
  async getProfile (profileId) {
    const url = new URL('profile/' + profileId, baseURL)
  
    const responce = await instance.get(url)
  
    return responce.data
  }
}

export const authAPI = {
  async authMe() {
    const url = new URL('auth/me', baseURL)
  
    const responce = await instance.get(url)
    return responce.data
  }
}

export const followAPI = {
  async followUser (userId) {
    const url = new URL('follow/' + userId, baseURL)
  
    const responce = await instance.post(url)
    return responce.data
  },

  async unfollowUser (userId) {
    const url = new URL('follow/' + userId, baseURL)
  
    const responce = await instance.delete(url)
    return responce.data
  }
}