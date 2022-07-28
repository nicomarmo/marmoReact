import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";


function Carrito() {
  const styles = {listStyle: "none", textDecoration: "none", color: "black"};

  return (
    <a link="#" style={styles}><FontAwesomeIcon icon={iconList.faCartShopping} /></a>

  )
}

export default Carrito;