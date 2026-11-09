const storageKey = 'loggedBlogappUser'

export const getUser = () => {
  const user = window.localStorage.getItem(storageKey)
  return user ? JSON.parse(user) : null
}

export const saveUser = (user) => {
  window.localStorage.setItem(storageKey, JSON.stringify(user))
}

export const removeUser = () => {
  window.localStorage.removeItem(storageKey)
}
