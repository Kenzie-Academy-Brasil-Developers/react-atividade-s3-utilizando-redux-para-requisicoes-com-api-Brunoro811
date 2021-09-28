import { Button, Container, ContainerForm, Input } from "./styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../Store/Modules/Digimon/thunks";
function Seach() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispath = useDispatch();
  const handleSeach = () => {
    setError(false);
    dispath(addDigimonsThunk(input));
    setInput("");
  };
  return (
    <Container>
      <h2>Procure pelo seu Digimon!</h2>
      <ContainerForm>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        />
        <Button onClick={handleSeach}>Seach</Button>
      </ContainerForm>
    </Container>
  );
}
export default Seach;
