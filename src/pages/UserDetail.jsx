
import { useParams, Link } from 'react-router-dom'

const users = [
  { id: 1, name: 'Aastha', email: 'aastha@example.com' },
  { id: 2, name: 'Alex', email: 'alex@example.com' },
  { id: 3, name: 'Sam', email: 'sam@example.com' },
]

export default function UserDetail() {
  const { id } = useParams()

  const user = users.find((user) => user.id === Number(id))

  if (!user) {
    return (
      <section>
        <h1>User not found</h1>
        <Link to="/users">Back to Users</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <Link to="/users">Back to Users</Link>
    </section>
  )
}
