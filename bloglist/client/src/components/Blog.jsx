import { useParams, useNavigate } from 'react-router-dom'
import { useBlog, useBlogActions } from '../store/blogStore'
import { useUser } from '../store/userStore'

const Blog = () => {
  const id = useParams().id
  const blog = useBlog().find((item) => item.id === id)
  const { likeBlog, removeBlog, addComment } = useBlogActions()
  const { user } = useUser()
  const navigate = useNavigate()

  if (!blog) return null

  const handleComment = async (event) => {
    event.preventDefault()
    const input = event.target.elements.comment
    if (input.value.trim()) {
      await addComment(blog.id, input.value)
      input.value = ''
    }
  }

  const canRemove = user && blog.user && user.username === blog.user.username

  return (
    <div className="blog">
      <h2>{blog.title}</h2>
      <div>{blog.url}</div>
      <div>Author: {blog.user.name}</div>
      <div>
        Likes: {blog.likes}
        {user && <button onClick={() => likeBlog(blog.id)}>Like</button>}
      </div>
      {canRemove && (
        <button
          onClick={async () => {
            await removeBlog(blog.id)
            navigate('/')
          }}
        >
          Remove
        </button>
      )}
      <h3>Comments</h3>
      <form onSubmit={handleComment}>
        <label>
          comment
          <input name="comment" type="text" />
        </label>
        <button type="submit">Add Comment</button>
      </form>
      <ul>
        {(blog.comments || []).map((comment, index) => (
          <li key={`${comment}-${index}`}>{comment}</li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
