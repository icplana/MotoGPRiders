import React, { useContext, useRef } from 'react'
import { useForm } from '../../hooks/useForm'
import { AuthContext } from '../context'
import { Link, useNavigate } from 'react-router-dom'
import { signInEmail, signInWithGoogle } from '../../Firebase/firebase'

export const LoginPage = () => {

  const { login } = useContext( AuthContext )

  const wrongAlert = useRef()
  const wrong2Alert = useRef()

  const onLoginGoogle = async (e) => {
    e.preventDefault()

    const user = await signInWithGoogle()
    
    if ( user.auth ) {
      
      login( user.email )
      return
    }

    wrong2Alert.current.classList.remove('d-none')

    setTimeout(() => {
      wrong2Alert.current.classList.add('d-none')
    }, 5000);
  }

  const onLogin = async (e) => {
    e.preventDefault()
    const user = await signInEmail( email, password )

    if ( user.auth ) {
      
      login( user.email )
      return
    }

    wrongAlert.current.classList.remove('d-none')

    setTimeout(() => {
      wrongAlert.current.classList.add('d-none')
    }, 5000);

    
  }

  const { onInputChange, email, password } = useForm({ email: '', password: '' })
  return (
    <div className='bg-light py-5 min-vh-100'>
      <form className='mx-5 bg-primary text-white rounded-3 p-4' onSubmit={ onLogin }>
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

        <button className='btn btn-secondary' onClick={ onLogin } >
          Login
        </button>

        <button className='btn btn-secondary ms-5' onClick={ onLoginGoogle }>
          Login with google
        </button>

        <div className="alert alert-danger d-none mt-3" role="alert" ref={ wrongAlert }>
            Usuario y/o contraseña incorrecto/s.
        </div>

        <div className="alert alert-danger d-none mt-3" role="alert" ref={ wrong2Alert }>
            Algo salio mal.
        </div>


      </form>
        <Link to="/register" className='ms-5 btn btn-primary mt-4'>Crear una cuenta!</Link>
    </div>
  )
}
