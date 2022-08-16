import "./NavBar.css"
import Carrito from "../Carrito/Carrito";
import { Link } from "react-router-dom";

function NavBar() {
const styles = {listStyle: "none", textDecoration: "none", color: "black"};

    return (
        <div>
            <header>
                <ul className="marian" style={styles}>
                    <Link to='/' style={styles}><li>Marisetas</li></Link>
                    <Link to='/' style={styles}><li>Productos</li></Link>
                    <Link to='/' style={styles}><li>Ofertas</li></Link>
                    <Link to='/' style={styles}><li>Contacto</li></Link>
                    <Link to='/' style={styles}><li>Lupa</li></Link>
                    <Carrito />
                </ul>
            </header>
        </div>
    );
}

export default NavBar;
