import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.125rem;

  font-family: "Poppins", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 50px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    width: 40%;
    margin-bottom: 30px;
  }
`;
