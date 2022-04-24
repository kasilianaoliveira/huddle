import { Container, Content, ContentText, ContentImage } from "./style";
import Flowing from "../../assets/illustration-flowing-conversation.svg";
import Users from "../../assets/illustration-your-users.svg";
import { Text } from "../Text";
import { PropsI } from "./types";

export const TextImageWhite: React.FC<PropsI> = ({ title, paragraph }) => {
  return (
    <Container>
      <Content>
        <ContentImage>
          <img src={Flowing} alt="" />
        </ContentImage>
        <ContentText>
          <Text title={title} />
          <p>{paragraph}</p>
        </ContentText>
      </Content>
    </Container>
  );
};
