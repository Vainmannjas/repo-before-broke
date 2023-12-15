import {useAuth} from '../../hooks/useAuth'

const Header = () => {
    const {user, setUser} = useAuth()
  return (
    <div>
      {user ? <>
                  <h2>
                    Welcome, {user.name}!
                  </h2>
                  <button onClick={() => setUser(null)}>Logout</button>
                </> 
              : <button onClick={() => setUser({
                name: 'Max'
              })}>Login</button>
        }
    </div>
  )
}

export default Header
