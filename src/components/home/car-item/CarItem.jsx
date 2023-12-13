import styles from '../Home.module.css'


const CarItem = ({car}) => {
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
            <p>
                {new Intl.NumberFormat('en-US', {
                style:'currency',
                currency: 'USD'
            }).format(car.price)}
            </p>
            <button>Read more</button>
            </div>
        </div>
    </div>
  )
}

export default CarItem
