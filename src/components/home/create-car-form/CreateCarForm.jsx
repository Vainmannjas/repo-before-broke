import { useForm } from 'react-hook-form'
import styles from  './CreateCarForm.module.css'


const CreateCarForm = () => { 
  const {register, reset, handleSubmit, formState:{errors}} = useForm({
    mode: 'onChange'
  })

  const createCar = data => {

    // setCars(prev => [...prev, {
    //   id: prev.length + 1, ...data
    // }])
    reset()
}
  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input 
        type="text" 
        {...register('name', {required: 'Name is required!'})}
        placeholder="Name of car" 
        />
      {errors?.name?.message && <p style={{color:'red'}}>Name is required</p>}
      <input 
        type="text" 
        {...register('price', {required: 'Price is required!'})}
        placeholder="Price" 
      />
      {errors?.price?.message && <p style={{color:'red'}}>Price is required</p>}
      <input 
        type="text" 
        {...register('img', {required: 'Img is required'})}
        placeholder="Img" 
      />
      {errors?.img?.message && <p style={{color:'red'}}>Img is required</p>}

      <button>Create</button>
    </form>
  )
}

export default CreateCarForm
