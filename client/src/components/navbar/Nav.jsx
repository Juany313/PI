import SearchBar from "../searchBar/SearchBar";
import {Link} from "react-router-dom"
/* styles */
import style from './Nav.module.css';

/* se pueden hacer la mejora de deshabilitar el boton si hay errors, mirar a partir de 1:10 clase de Sabri */
export default function Nav() {
  return (
    <div className={style.nav}>
      <SearchBar />
    <div className={style.buttons}>
      
      <Link to="/">
      <button>Landing</button>
      </Link>
      <Link to="/form">
      <button>Crear Driver</button>
      </Link>
    </div>
      
    </div>
  );
}