import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import ErrorBoundary from './components/ErrorBoundary'
import Navigation from './components/Navigation'
import { useUserActions } from './store/userStore'
import { useBlogActions } from './store/blogStore'
import UsersList from './components/UsersList'
import User from './components/User'

const App = () => {
  const { initializeUser } = useUserActions()
  const { initializeBlogs } = useBlogActions()

  useEffect(() => {
    initializeUser()
    initializeBlogs()
  }, [initializeUser, initializeBlogs])

  return (
    <Router>
      <Navigation />
      <Notification />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create" element={<BlogForm />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
