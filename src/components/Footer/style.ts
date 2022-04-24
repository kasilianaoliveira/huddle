import styled from "styled-components";
import BgFooter from "../../assets/bg-footer-top-desktop.svg";

export const Container = styled.footer`
  margin-top: 200px;
  background-color: var(--very-dark-cyan);
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 1349px;
    height: 150px;
    top: -150px;
    background-image: url(${BgFooter});
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  padding: 30px 0;
  align-items: center;
  justify-content: space-around;

  p {
    color: #fff;
  }
`;

export const Contacts = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 40px;
  }
  img {
    margin-bottom: 20px;
    align-self: flex-start;
  }

  .contacts__item {
    color: #fff;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    div {
      display: flex;
      span {
        margin-left: 15px;
      }
    }
  }
`;

export const Newsletter = styled.div`
  max-width: 600px;

  display: flex;
  flex-direction: column;

  .newsletter__text {
    max-width: 350px;

    h2 {
      margin-bottom: 20px;
      color: white;
    }
  }
  form {
    margin-top: 40px;
    display: flex;
    align-items: center;

    input {
      width: 350px;
      height: 3.125rem;
      border: 1px solid #a8a8b3;
      border-radius: 0.5rem;
      padding: 0 1rem;
      background: #fff;
    }

    button {
      color: #fff;
      font-size: 0.8rem;
      font-weight: bold;
      margin-left: 2rem;
      padding: 1rem 3rem;
      border-radius: 0.5rem;
      background: var(--primary-light-pink);

      &:hover {
        background: var(--primary-pink);
      }
    }
  }
`;
