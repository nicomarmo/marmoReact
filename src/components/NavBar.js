function NavBar() {
const styles = {listStyle: "none", textDecoration: "none", color: "black"};

    return (
        <div>
            <header>
                <ul style={styles}>
                    <a href="#" style={styles}><li>Marisetas</li></a>
                    <a href="#" style={styles}><li>Productos</li></a>
                    <a href="#" style={styles}><li>Ofertas</li></a>
                    <a href="#" style={styles}><li>Contacto</li></a>
                    <a href="#" style={styles}><li>Lupa</li></a>
                </ul>
            </header>
        </div>
    );
}

export default NavBar;
