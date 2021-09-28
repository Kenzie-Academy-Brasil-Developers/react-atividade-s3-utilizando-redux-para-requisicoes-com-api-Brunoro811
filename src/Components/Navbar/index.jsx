import { Link } from "react-router-dom";
import { Nav } from "./styles";
function Navbar() {
  return (
    <Nav>
      <li>
        <Link to="/">Todos </Link>
      </li>
      <li>
        <Link to="/Seach">Buscar Digimon</Link>
      </li>
    </Nav>
  );
}
export default Navbar;
