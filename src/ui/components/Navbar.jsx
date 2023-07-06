import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';



export const Navbar = () => {

    

    const navigate = useNavigate()

    
    
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

            
        </nav>
    )
}