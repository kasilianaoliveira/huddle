import { Container, Content } from "./style";
import Communities from "../../assets/icon-communities.svg";
import Messages from "../../assets/icon-messages.svg";

import { Text } from "../Text";
import { PropsI } from "./types";

export const ScreenNumber: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="icon">
          <img src={Communities} width="30px" />
        </div>
        <Text title="1.4k+" isLarge />
        <p>Communities Formed</p>
      </Content>

      <Content>
        <div className="icon">
          <img src={Messages} width="30px" />
        </div>
        <Text title="2.7m+" isLarge />
        <p>Messages Sent</p>
      </Content>
    </Container>
  );
};
