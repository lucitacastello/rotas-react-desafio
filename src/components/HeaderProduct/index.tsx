import './styles.css';
import { NavLink } from 'react-router-dom';

export default function HeaderProduct() {
    return (
        <section className='container '>
            <div className='header-prod mt20'>
                <nav className='navbar'>
                    <NavLink to="computers" className={({ isActive }) => isActive ? "nav-product-item menu-active" : "nav-product-item"} >
                        Computadores
                    </NavLink>
                    <NavLink to="eletronics" className={({ isActive }) => isActive ? "nav-product-item menu-active" : "nav-product-item"} >
                        Eletrônicos
                    </NavLink>
                    <NavLink to="books" className={({ isActive }) => isActive ? "nav-product-item menu-active" : "nav-product-item"}>
                        Livros
                    </NavLink>
                </nav>
            </div>
        </section>
    )
}
