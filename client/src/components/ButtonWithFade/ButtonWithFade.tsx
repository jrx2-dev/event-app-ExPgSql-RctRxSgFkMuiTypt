import { MouseEventHandler } from "react";
import Button from "@material-ui/core/Button";

import { whithFade } from "../../hocs/withFade/withFade";

interface ButtonWithFadeProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  label: string;
}

const ButtonWithFade: React.FunctionComponent<ButtonWithFadeProps> = (
  props
): JSX.Element => {
  const { onClick, label } = props;

  return (
    <Button color="inherit" onClick={onClick}>
      {label}
    </Button>
  );
};

export default whithFade(ButtonWithFade);
