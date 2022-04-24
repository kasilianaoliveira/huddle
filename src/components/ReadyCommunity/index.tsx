import { Container, Content } from "./style";
import { Text } from "../Text";
import { ButtonClick } from "../Button";

export const ReadyCommunity: React.FC = () => {
  return (
    <Container>
      <Content>
        <Text title="Ready To Build Your Community ?" />
        <ButtonClick title="Get Started For Free" />
      </Content>
    </Container>
  );
};
