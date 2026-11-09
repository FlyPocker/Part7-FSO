import { AppBar, Toolbar, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../store/userStore'
import { useNotificationActions } from '../store/notifyStore'
import { useUserActions } from '../store/userStore'

const Navigation = () => {
  const { user } = useUser()
  const { logout } = useUserActions()
  const { setNotification } = useNotificationActions()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    setNotification('Wylogowano', 'success')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Link style={{ color: 'inherit', textDecoration: 'none', padding: 8 }} to="/">
          blogs
        </Link>
        <a style={{ color: 'inherit', textDecoration: 'none', padding: 8 }} href="/users">
          users
        </a>
        <Link style={{ color: 'inherit', textDecoration: 'none', padding: 8 }} to="/create">
          new blog
        </Link>
        {user === null ? (
          <Link style={{ color: 'inherit', textDecoration: 'none', padding: 8 }} to="/login">
            login
          </Link>
        ) : (
          <Button color="inherit" onClick={() => {
            handleLogout()
            navigate('/')
          }}>
            logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default Navigation
