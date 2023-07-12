import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';



export const Navbar = () => {

    

    const { state, logout } = useContext( AuthContext )




    
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                MotoGP
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ?'active': ''}`} 
                        to="/motoGP"
                    >
                        MotoGP
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ?'active': ''}`} 
                        to="/moto2"
                    >
                        Moto2
                    </NavLink>

                   
                </div>
            </div>

            <div>

                <span className='text-white me-4'>
                    { state.user.name } 
                </span>
                <button className='btn btn-secondary' onClick={ logout }>
                    Logout
                </button>
            </div>

            
        </nav>
    )
}