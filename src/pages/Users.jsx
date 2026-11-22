
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const users = [
  { id: 1, name: 'Aastha', email: 'aastha@example.com' },
  { id: 2, name: 'Alex', email: 'alex@example.com' },
  { id: 3, name: 'Sam', email: 'sam@example.com' },
]

export default function Users() {
  const [search, setSearch] = useLocalStorage('users-search', '')
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section>
      <h1>Users</h1>

      <p>Viewport width: {width}px</p>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </section>
  )
}
