
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Layout() {
  const { theme, toggle } = useTheme()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>{' '}
          <NavLink to="/users">Users</NavLink>{' '}
          <NavLink to="/login">Login</NavLink>{' '}
          <NavLink to="/profile">Profile</NavLink>
        </nav>

        <button onClick={toggle}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>

        {user && (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
