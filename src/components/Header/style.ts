import styled from "styled-components";

export const HeaderPage = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.125rem;

  font-family: "Poppins", sans-serif;

  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 1.25rem;

  border: 2px solid var(--primary-light-pink);
  background-color: transparent;
  color: var(--primary-light-pink);
  font-weight: bold;
  transition: all 0.3s;

  :hover {
    background-color: var(--primary-light-pink);
    color: #fff;
    border-color: var(--primary-light-pink);
  }
`;
