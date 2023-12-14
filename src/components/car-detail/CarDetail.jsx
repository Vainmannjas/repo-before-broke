import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import CarItem from '../home/car-item/carItem'
import { CarService } from '../../services/car.service'
import styles from './CarDetail.module.css'
import {withAuth} from '../../HOC/withAuth'

const CarDetail = () => {

    const {id} = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
          const data = await CarService.getById(id)
    
          setCar(data)
        }
        fetchData()
      }, [id])

      if(!car?.name) return <p>Loading...</p>

  return (
    <div>
        <Link to="/" className={styles.btn}>Back</Link>
        <CarItem car={car}/>
    </div>
  )
}

export default withAuth(CarDetail)
