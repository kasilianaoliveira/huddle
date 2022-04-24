import { ButtonClick } from "../Button";
import { Text } from "../Text";
import { Container, Content } from "./style";
import Screen from "../../assets/screen-mockups.svg";

export const About: React.FC = () => {
  return (
    <Container>
      <Content>
        <Text title="Build The Community Your Fans Will Love" />
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
      </Content>
      <ButtonClick title="Get Started For Free" />

      <img src={Screen} alt="" className="icon-large" />
    </Container>
  );
};
