import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 60px auto;
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    @media (min-width: 768px) {
      margin-bottom: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 300px;
  input {
    margin: 0;
    height: 50px;
    width: 80%;
    border-radius: 10px;
    font-size: 20px;
  }
  button {
    padding: 15px 5px;
  }
  button:hover {
    background: darkgreen;
    color: lightyellow;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    width: 80%;
    margin: 5px auto;
    input {
      border-radius: 10px 0 0 10px;
      width: 100%;
      padding: 15px 10px;
    }
  }
`;
