import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  max-width: 1000px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const ContainerForm = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Button = styled.button`
  padding: 5px;
  background-color: black;
  color: #ffffff;
  border: none;
  width: 80px;
  height: 35px;
  font-size: 1rem;
  border-radius: 30px;
  :hover {
    color: #000;
    background-color: #fff;
  }
  :active {
    transform: translateY(10px);
    transition: 0.5s;
  }
`;
export const Input = styled.input`
  outline: none;
  padding: 10px;
  width: 200px;
  font-size: 1rem;
  background-color: aliceblue;
  border: 1px solid dimgray;
  border-radius: 30px;
  color: dimgray;
  transition: 0.5s;
  :focus {
    width: 300px;
    transition: 0.5s;
  }
`;
