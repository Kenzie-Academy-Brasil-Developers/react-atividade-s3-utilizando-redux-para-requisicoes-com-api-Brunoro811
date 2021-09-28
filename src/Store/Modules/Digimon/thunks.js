import axios from "axios";
import { toast } from "react-toastify";
import { addDigimons } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((response) => dispatch(addDigimons(response.data[0])))
    .catch((error) => toast.error("Não encontrado"));
};
export default addDigimonsThunk;
