import styled from "styled-components";
import { PropsI } from "./types";

export const Container = styled.div`
  max-width: 1440px;
  font-weight: 600;
  //padding: 0 1.875rem;
`;

export const Title = styled.h1<PropsI>`
  color: var(--very-dark-cyan);
  font-size: ${(props) => (props.isLarge ? "4rem" : "3rem")};
  margin-bottom: 1.875rem;
  color: var(--very-dark-cyan);
`;

export const Paragraph = styled.p<PropsI>`
  //width: ${(props) => (props.isLarge ? "100%" : "45%")};
  text-align: left;
  margin-bottom: 1.6rem;
  //color: ${(props) => (props.isLarge ? "#ccc" : "var(--very-dark-cyan);")};
`;

export const Content = styled.div<PropsI>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
