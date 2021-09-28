import styled from "styled-components";
export const Nav = styled.ul`
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  display: inline-flex;
  li a {
    padding: 5px;
    color: #fff;
    font-size: 1.1rem;
    :hover {
      text-decoration: underline;
    }
  }
`;
