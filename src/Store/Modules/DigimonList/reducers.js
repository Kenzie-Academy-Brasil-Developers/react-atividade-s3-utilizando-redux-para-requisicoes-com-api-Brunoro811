import { ALL__DIGIMONS } from "./actionsType";
const inicialState = { all: [], status: false };
const allDigimonsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ALL__DIGIMONS:
      return { all: action.allDigimons };
    default:
      return state;
  }
};
export default allDigimonsReducer;
