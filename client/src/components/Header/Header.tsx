import { useHistory, useLocation } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import PATH from "../../pages/path";

import ButtonWithFade from "../ButtonWithFade/ButtonWithFade";

import classes from "./Header.module.scss";

import messages from "./Header.messages";

interface linkButton {
  path: string;
  label: string;
}

const Header: React.FunctionComponent = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation();

  const linkButtons: linkButton[] = [
    {
      path: PATH.ADD_EVENT,
      label: messages.addEvent,
    },
    {
      path: PATH.EVENT_LIST,
      label: messages.eventList,
    },
  ];

  const changeRoute = (route: string) => {
    history.push(route);
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {messages.title}
        </Typography>
        {linkButtons.map((button, index) => {
          return (
            location.pathname !== button.path && (
              <ButtonWithFade
                key={index}
                label={button.label}
                onClick={() => changeRoute(button.path)}
              />
            )
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
