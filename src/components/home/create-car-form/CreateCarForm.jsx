import { useForm } from 'react-hook-form'
import styles from  './CreateCarForm.module.css'
import ErrorMessage from './ErrorMessage'
import { useCreateCar } from './useCreateCar'

const CreateCarForm = () => { 
  const {
    register,
    reset,
    handleSubmit,
    formState:{ errors },
  } = useForm({
    mode: 'onChange'
  })

  const {createCar} = useCreateCar(reset)

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input 
        type="text" 
        {...register('name', {required: 'Name is required!'})}
        placeholder="Name of car" 
        />
      <ErrorMessage error={errors?.name?.message}/>
      <input 
        type="text" 
        {...register('price', {required: 'Price is required!'})}
        placeholder="Price" 
      />
      <ErrorMessage error={errors?.price?.message}/>
      <input 
        type="text" 
        {...register('img', {required: 'Img is required'})}
        placeholder="Img" 
      />
      <ErrorMessage error={errors?.img?.message}/>

      <button>Create</button>
    </form>
  )
}

export default CreateCarForm
