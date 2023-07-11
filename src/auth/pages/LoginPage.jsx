import React from 'react'
import { useForm } from '../../hooks/useForm'

export const LoginPage = () => {

  const { onInputChange, email, password } = useForm({ email: '', password: '' })
  return (
    <div className='bg-light py-5 min-vh-100'>
      <form className='mx-5 bg-primary text-white rounded-3 p-4'>
      <h3 className='mb-4'>Login</h3>
      
        <div className=' mb-3'>          
          <label htmlFor="email" className='form-label'>Correo</label>
          <input 
            type="email" 
            id='email'
            name='email' 
            className='form-control' 
            placeholder='correo@correo.com'
            value={ email }
            onInput={ onInputChange }            
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Contraseña</label>
          <input 
            type="password" 
            className='form-control' 
            placeholder='********'
            name='password'
            value={ password }
            onInput={ onInputChange }  
          />
        </div>

        <button className='btn btn-secondary'>
          Login
        </button>

      </form>
    </div>
  )
}
