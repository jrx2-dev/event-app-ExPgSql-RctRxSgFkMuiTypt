import PATH from "../../pages/path";

import { whithFade } from "../../hocs/withFade/withFade";

import classes from "./ErrorPage.module.scss";

import messages from "./ErrorPage.messages";

const ErrorPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>{messages.sorry}</h1>
        <h2>{messages.something}</h2>
        <p>
          {messages.please}
          <a href={PATH.HOME}>{messages.home}</a>.
        </p>
      </div>
    </div>
  );
};

export default whithFade(ErrorPage);
