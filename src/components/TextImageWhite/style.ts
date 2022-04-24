import styled from "styled-components";

export const Container = styled.section`
  margin-top: 250px;
  //background-color: var(--very-pale-blue);
`;
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 30px 0;
  align-items: center;
  justify-content: space-around;
`;

export const ContentText = styled.div`
  width: 40%;
`;

export const ContentImage = styled.div`
  img {
    width: 500px;
  }
`;
