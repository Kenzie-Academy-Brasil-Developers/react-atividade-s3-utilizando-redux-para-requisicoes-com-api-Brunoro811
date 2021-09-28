import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  max-width: 1000px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.5s;
  ul {
    width: 250px;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 0px 5px 0px #000000;
  }
  ul li {
    font-size: 1rem;
  }
  ul li p {
    font-size: 0.8rem;
  }
  ul li img {
    width: 80px;
    border-radius: 5px;
  }
`;
