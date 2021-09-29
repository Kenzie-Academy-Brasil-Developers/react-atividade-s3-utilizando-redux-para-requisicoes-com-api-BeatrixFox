import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "./../../store/modules/digimons/thunks";
import { Container, Content } from "./style";
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FaSearch } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0),
    color: "white",
    background: "green",
    width: theme.spacing(30),
  },
}));

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonsThunk(input, setError));
    setInput("");
  };

  return (
    <Container>
      <h2>
        Procure pelo seu Digimon! <FaSearch />
      </h2>
      <Content>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        ></input>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={handleSearch}
        >
          {"  "}Pesquisar {"  "}
        </Button>
      </Content>
    </Container>
  );
};

export default Search;
