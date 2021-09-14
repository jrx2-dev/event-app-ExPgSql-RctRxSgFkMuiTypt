import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { whithFade } from "../../hocs/withFade/withFade";

import { Event } from "../../models/Interfaces";

import { formattedDate } from "../../utils/dateUtils";

import classes from "./EventCard.module.scss";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FunctionComponent<EventCardProps> = (
  props
): JSX.Element => {
  const { event } = props;

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Typography variant="h6">
        {event.firstName} {event.lastName}
      </Typography>
      <Typography variant="subtitle2" className={classes.wordBreak}>
        {event.email}
      </Typography>
      <Typography variant="body2">{formattedDate(event.eventDate)}</Typography>
    </Paper>
  );
};

export default whithFade(EventCard);
