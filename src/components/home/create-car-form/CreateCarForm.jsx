import { useState } from 'react'
import styles from  './CreateCarForm.module.css'

const clearData = {
  name: "",
  price: "",
  img: ""
}

const CreateCarForm = ({setCars}) => { 
  const [data, setData] = useState(clearData)

  const createCar = (e) => {
    e.preventDefault()

    setCars(prev => [...prev, {
      id: prev.length + 1, ...data
    }])
    setData(clearData)
}



  return (
    <form className={styles.form}>
      <input 
        type="text" 
        placeholder="Name of car" 
        onChange={e => setData(prev => ({...prev, name: e.target.value}))} 
        value={data.name}
      />
      <input 
        type="text" 
        placeholder="Price" 
        onChange={e => setData(prev => ({...prev, price: e.target.value}))} 
        value={data.price}/>
      <input 
        type="text" 
        placeholder="Img" 
        onChange={e => setData(prev => ({...prev, img: e.target.value}))} 
        value={data.img}/>

      <button onClick={e => createCar(e)}>Create</button>
    </form>
  )
}

export default CreateCarForm
