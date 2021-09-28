//açao de adicionar  lugar do state
import { ADD_DIGIMONS } from "./actionTypes";
const inicialState = { digimon: [], status: false };
const allDigimonsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      return { digimon: action.digimon, status: true };
    default:
      return state;
  }
};
export default allDigimonsReducer;
