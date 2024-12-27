import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/home.svg';
import './styles.css';

export default function Header() {
    return (
        <header>
            <div className='container'>
                <div className='nav-container'>
                    <div className='nav-content-container '>
                        <nav className='navbar'>
                            <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}  >
                                Início
                            </NavLink>
                            <NavLink to="/products" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}  >
                                Produtos
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}  >
                                Sobre nós
                            </NavLink>
                        </nav>
                    </div>
                    <NavLink to="/">
                        <img src={homeIcon} alt='Home' />
                    </NavLink>
                </div>
            </div>
        </header>
    )
}