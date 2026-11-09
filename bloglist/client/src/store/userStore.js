import { create } from 'zustand'
import blogService from '../services/blogs'
import loginService from '../services/login'
import userService from '../services/users'
import { getUser, saveUser, removeUser } from '../services/persistentUser'

const useUserStore = create((set) => ({
  user: null,
  users: [],
  actions: {
    login: async (username, password) => {
      const user = await loginService.login({ username, password })
      set(() => ({ user: user }))
      blogService.setToken(user.token)
      saveUser(user)
    },
    initializeUser: async () => {
      const user = getUser()
      if (user) {
        set(() => ({ user }))
        blogService.setToken(user.token)
      }
      const allUsers = await userService.getAll()
      set(() => ({ users: allUsers }))
    },
    logout: () => {
      set(() => ({ user: null }))
      removeUser()
      blogService.setToken(null)
    },
  },
}))

export const useUser = () => {
  const user = useUserStore((state) => state.user)
  const users = useUserStore((state) => state.users)
  return { user, users }
}
export const useUserActions = () => useUserStore((state) => state.actions)
export default useUserStore
