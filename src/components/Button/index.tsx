import { Button } from "./style";
import { Props } from "./types";

export const ButtonClick: React.FC<Props> = ({ title }) => {
  return <Button> {title}</Button>;
};
