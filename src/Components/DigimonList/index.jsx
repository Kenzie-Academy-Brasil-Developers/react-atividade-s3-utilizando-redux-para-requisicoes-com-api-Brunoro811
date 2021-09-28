import { Container } from "./styles";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import allDigimonsThunk from "../../Store/Modules/DigimonList/thunk";
import Digimon from "../Digimon";
import CardDigimon from "../CardDigimon";
function DigimonList() {
  const dispatch = useDispatch();
  const { all } = useSelector((state) => state.allDigimons);
  const seachAllDigimons = () => {
    dispatch(allDigimonsThunk());
  };
  useEffect(() => {
    seachAllDigimons();
  }, []);
  return (
    <Container>
      {/* <button onClick={seachAllDigimons}>buscar</button> */}
      {/* {console.log(all)} */}
      {all.map((element, indice) => (
        <CardDigimon
          key={indice}
          name={element.name}
          img={element.img}
          level={element.level}
        />
      ))}
    </Container>
  );
}
export default DigimonList;
