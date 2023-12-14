import styles from '../Home.module.css'
import {Link} from 'react-router-dom'
import Price from './Price'
import { useState } from 'react'


const CarItem = ({car}) => {
    const [count, setCount] = useState(0)

  return (
    <div key={car.id} className={styles.item}>
        <div className={styles.content}>
            <div className={styles.img}
                style={{
                    backgroundImage: `url(${car.img})`,
                }}
            />
            <div className={styles.info}>
            <h2>{car.name}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>Click</button>
            <Price price={car.price}/>
            <Link to={`/car/${car.id}`} className="btn">
                Read more
            </Link>
            </div>
        </div>
    </div>
  )
}

export default CarItem
