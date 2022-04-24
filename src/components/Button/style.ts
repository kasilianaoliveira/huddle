import styled from "styled-components";
import { Props } from "./types";

export const Button = styled.button`
  padding: 1rem 4rem;
  border-radius: 3.5rem;

  border: 2px solid var(--primary-pink);
  background-color: var(--primary-pink);
  color: #fff;
  font-weight: bold;
  transition: all 0.3s;

  :hover {
    background-color: var(--primary-light-pink);
    color: #fff;
    border-color: var(--primary-light-pink);
  }
`;
