import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import CarItem from './car-item/carItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import { CarService } from '../../services/car.service'
import VideoPlayer from './VideoPlayer'
import { AuthContext } from '../../providers/AuthProvider'


const Home = () => {
  const {data, isLoading} = useQuery(['cars'], () => CarService.getAll())

  const {user, setUser} = useContext(AuthContext)

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
        <h1>Cars catalog</h1>

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

        <VideoPlayer/>
        <CreateCarForm/>
        {data.length ? data.map(car => (
          <CarItem key={car.id} car={car}/>

        ))
        : <p>There are no cars</p>
      }
    </div>
  )
}

export default Home
