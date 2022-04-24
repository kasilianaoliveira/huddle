import { Container, Content, ContentText, ContentImage } from "./style";

import Grow from "../../assets/illustration-grow-together.svg";
import Users from "../../assets/illustration-your-users.svg";
import { Text } from "../Text";
import { PropsI } from "./types";

export const TextImage: React.FC<PropsI> = ({ title, paragraph, img }) => {
  return (
    <Container>
      <Content>
        <ContentText>
          <Text title={title} />
          <p>{paragraph}</p>
        </ContentText>
        <ContentImage>
          <img src={img == "img1" ? Users : Grow} alt="" />
        </ContentImage>
      </Content>
    </Container>
  );
};
