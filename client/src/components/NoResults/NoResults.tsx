import { Link } from "react-router-dom";

import { whithFade } from "../../hocs/withFade/withFade";

import classes from "./NoResults.module.scss";

import messages from "./NoResults.messages";

import PATH from "../../pages/path";

const NoResults: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>{messages.sorry}</h1>
        <h2>
          {messages.if} <Link to={PATH.ADD_EVENT}>{messages.addPage}</Link>
        </h2>
      </div>
    </div>
  );
};

export default whithFade(NoResults);
