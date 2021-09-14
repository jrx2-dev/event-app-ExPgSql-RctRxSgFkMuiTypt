import SpinnerLoader from "react-loader-spinner";

import { whithFade } from "../../hocs/withFade/withFade";

import classes from "./Loader.module.scss";

const PRIMARY_DOT_COLOR = "#3f51b5";
const SECONDARY_DOT_COLOR = "#3483fa";
const SPINNER_TYPE = "MutatingDots";
const SPINNER_SIZE = 100;

const Loader: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={classes.loaderSpinner}>
      <SpinnerLoader
        type={SPINNER_TYPE}
        color={PRIMARY_DOT_COLOR}
        secondaryColor={SECONDARY_DOT_COLOR}
        height={SPINNER_SIZE}
        width={SPINNER_SIZE}
      />
    </div>
  );
};

export default whithFade(Loader);
