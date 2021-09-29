import styled from "styled-components";

export const Container = styled.section`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  border: 2px solid darkcyan;
  border-radius: 15px;
  width: 250px;
  height: 300px;
  justify-content: center;
  background: gray;

  > div {
    border-radius: 15px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        border-radius: 15px 15px 0 0;
      }
      p {
        font-size: 20px;
        padding: 5px;
        color: darkgreen;
        font-weight: bold;
        background-color: lightgreen;
        border-radius: 0 0 15px 15px;
      }
    }
  }
`;
