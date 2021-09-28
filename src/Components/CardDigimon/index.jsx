import { Container } from "./styles";
function CardDigimon({ name, img, level }) {
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
export default CardDigimon;
