import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allDigimonsReducer from "./Modules/DigimonList/reducers";
import digimonsReducer from "./Modules/Digimon/reducers";
const reducers = combineReducers({
  digimon: digimonsReducer,
  allDigimons: allDigimonsReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
