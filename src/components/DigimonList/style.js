import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px auto;
  background: lightcyan;
  list-style: none;
  border-radius: 25px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const DigiList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid darkblue;
  border-radius: 20px;
  h5,
  p {
    font-size: 18px;
    color: darkmagenta;
    font-weight: bold;
    padding: 5px;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  :hover {
    background: rgb(80, 128, 31);
    background: linear-gradient(
      347deg,
      rgba(80, 128, 31, 1) 0%,
      rgba(14, 142, 214, 1) 47%,
      rgba(0, 255, 111, 1) 100%
    );
    h5,
    p {
      color: black;
    }
  }
`;
