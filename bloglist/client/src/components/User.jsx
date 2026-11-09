import { Link, useParams } from 'react-router-dom'
import { useUser } from '../store/userStore'

const User = () => {
  const id = useParams().id
  const user = useUser().users.find((u) => u.id === id)
  const { user: currentUser, users } = useUser()
  if (!user) {
    return <div>User not found</div>
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <h3>Blogs:</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>
            {<Link to={`/blogs/${blog.id}`}>{blog.title}</Link>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User
