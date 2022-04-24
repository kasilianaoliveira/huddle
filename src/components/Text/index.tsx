import { Container, Content, Title, Paragraph } from "./style";
import { PropsI } from "./types";

export const Text: React.FC<PropsI> = ({ title, isLarge }) => {
  return (
    <Container>
      <Title isLarge={isLarge}>{title} </Title>
    </Container>
  );
};
