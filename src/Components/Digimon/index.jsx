import { Container } from "./styles";
import { useSelector } from "react-redux";
function Digimon() {
  const {
    digimon: { name, img, level },
  } = useSelector((state) => state.digimon);
  return (
    <Container>
      <ul>
        <li>
          <img src={`${img}`} alt={name} />
        </li>
        <li>
          <p>{level}</p>
          <p>{name}</p>
        </li>
      </ul>
    </Container>
  );
}
export default Digimon;
