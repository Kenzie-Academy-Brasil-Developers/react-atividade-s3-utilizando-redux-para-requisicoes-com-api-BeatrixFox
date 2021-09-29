import axios from "axios";

import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((response) => dispatch(() => addDigimon(response.data[0].name)))
    .catch((err) => console.log(err));
  //Aqui faça uma requisição com o axios e em seguida, no .then()
  //utilize a função dispatch() passando addDigimon(response.data[0].name)
};

export default addDigimonsThunk;
