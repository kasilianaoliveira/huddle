import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;

  color: #fff;

  display: flex;

  align-items: center;
  justify-content: space-around;
`;
export const Content = styled.div`
  position: relative;
  display: flex;
  //background-color: #54d552;
  flex-direction: column;
  //align-items: flex-start;
  justify-content: space-around;

  p {
    color: #ccc;
    text-align: center;
  }
`;
