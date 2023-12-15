import CarItem from '../home/car-item/CarItem'

const Catalog = ({data}) => {
  return (
    <div>
        {data.length ? (
            data.map(car => <CarItem key={car.id} car=
            {car}/>)
        ) : ( 
        <p>There are no cars</p>
        )}
    </div>
  )
}

export default Catalog
