import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container } from "@material-ui/core";
import Masonry from "react-masonry-css";

import EventCard from "../../components/EventCard/EventCard";
import Loader from "../../components/Loader/Loader";
import NoResults from "../../components/NoResults/NoResults";

import { whithFade } from "../../hocs/withFade/withFade";

import { Event } from "../../models/Interfaces";

import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createEventsActions } from "../../store/actions/event.actions";

import classes from "./EventList.module.scss";

import messages from "./EventList.messages";

const EventList: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const storedEvents = useAppSelector(
    (state: RootState) => state.events.events
  );

  const [events, setEvents] = useState<Event[] | null>(null);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const getEventsHandler = (result: boolean, error: string | null) => {
    if (error) {
      toast(messages.getEventsError, { type: toast.TYPE.ERROR });
    }
    setIsRequesting(false);
  };

  useEffect(() => {
    setEvents(storedEvents);
  }, [storedEvents]);

  useEffect(() => {
    setEvents([]);
    setIsRequesting(true);
    dispatch(createEventsActions.getEvents(getEventsHandler));
  }, [dispatch]);

  return (
    <Container className={classes.root}>
      {isRequesting ? (
        <Loader />
      ) : (
        <>
          {events && events.length > 0 && (
            <Masonry
              breakpointCols={breakpointColumns}
              className={classes.masonryGrid}
              columnClassName={classes.masonryGridColumn}
            >
              {storedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </Masonry>
          )}
          {events && events.length === 0 && <NoResults />}
        </>
      )}
    </Container>
  );
};

export default whithFade(EventList);
