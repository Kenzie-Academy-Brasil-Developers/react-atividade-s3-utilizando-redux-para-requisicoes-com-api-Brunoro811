import axios from "axios";
import { allDigimons } from "./actions";

const allDigimonsThunk = (setError) => (dispatch) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((response) => {
      console.log(response.data);
      return dispatch(allDigimons(response.data));
    })
    .catch((error) => console.log(error));
};
export default allDigimonsThunk;
