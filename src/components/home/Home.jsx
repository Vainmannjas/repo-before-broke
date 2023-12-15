import { useQuery } from "@tanstack/react-query"
import { CarService } from "../../services/car.service"
import VideoPlayer from './VideoPlayer'
import CreateCarForm from './create-car-form/CreateCarForm'
import Header from '../ui/Header'
import Catalog from '../ui/Catalog'

const Home = () => {
  const {data, isLoading} = useQuery(['cars'], () => CarService.getAll())

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
        <h1>Cars catalog</h1>
        <Header/>
        <VideoPlayer/>
        <CreateCarForm/>
        <Catalog data={data}/>
    </div>
  )
}

export default Home
