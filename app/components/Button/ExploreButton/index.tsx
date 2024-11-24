import { ButtonProps } from "antd";
import { ClrButton } from "../Base";
interface ClrButtonPropsType extends ButtonProps {
  btntype: "primary" | "secondary";
}
export const ExploreButton = (props: ClrButtonPropsType) => {
  return <ClrButton {...props} />;
};
