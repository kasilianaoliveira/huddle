import { HeaderPage, Button } from "./style";
import Logo from "../../assets/logo.svg";

export const Header: React.FC = () => {
  return (
    <HeaderPage>
      <img src={Logo} alt="Huddle" />
      <Button>Try it Free</Button>
    </HeaderPage>
  );
};
