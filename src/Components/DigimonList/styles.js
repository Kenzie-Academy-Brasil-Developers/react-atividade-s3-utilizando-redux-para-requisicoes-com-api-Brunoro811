import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1 px solid gray;
  }
`;
