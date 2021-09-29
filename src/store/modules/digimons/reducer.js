import { ADD_DIGIMONS } from "./actionsTypes";

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      return [...state, action.digimon];
    // Escreva seu case para adicionar um novo digimon.
    default:
      return state;
  }
};

export default digimonsReducer;
