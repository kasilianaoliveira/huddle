import styled from "styled-components";
import BgTop from "../../assets/bg-section-top-desktop-2.svg";
import BgBottom from "../../assets/bg-section-bottom-desktop-2.svg";

export const Container = styled.section`
  margin-top: 250px;
  background-color: var(--very-pale-blue);
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 1349px;
    height: 155px;
    top: -150px;
    background-image: url(${BgTop});
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 1349px;
    height: 138px;
    bottom: -135px;
    background-image: url(${BgBottom});
  }
`;
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 30px 0;
  align-items: center;
  justify-content: space-around;
  //background-color: var(--very-pale-blue);

  img {
  }
`;

export const ContentText = styled.div`
  max-width: 40%;
`;

export const ContentImage = styled.div`
  img {
    width: 500px;
  }
`;
