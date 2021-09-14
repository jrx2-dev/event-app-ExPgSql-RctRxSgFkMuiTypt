import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { FormikHelpers } from "formik";
import { toast } from "react-toastify";

import { useAppDispatch } from "../../store/hooks";
import { createEventsActions } from "../../store/actions/event.actions";

import {
  Event,
  IAddEventForm,
  IFormStatus,
  IFormStatusProps,
} from "../../models/Interfaces";
import { FormStatusType } from "../../models/Enum";

import { whithFade } from "../../hocs/withFade/withFade";

import AddEventForm from "../../components/AddEventForm/AddEventForm";

import classes from "./AddEvent.module.scss";

import messages from "./AddEvent.messages";

const AddEventFormStatusProps: IFormStatusProps = {
  success: {
    message: messages.successMessage,
    type: FormStatusType.SUCCESS,
  },
  error: {
    message: messages.errorMessage,
    type: FormStatusType.ERROR,
  },
};

const AddEvent: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: "",
    type: FormStatusType.SUCCESS,
  });

  const addEvent = (
    eventToAdd: IAddEventForm,
    actions: FormikHelpers<IAddEventForm>
  ) => {
    const newEvent: Event = {
      firstName: eventToAdd.firstName,
      lastName: eventToAdd.lastName,
      email: eventToAdd.email,
      eventDate: eventToAdd.eventDate?.toISOString() || "",
    };

    const addEventHandler = (result: boolean, error: string | null) => {
      if (result) {
        setFormStatus(AddEventFormStatusProps.success);
        actions.resetForm({});
      }
      if (error) {
        setFormStatus(AddEventFormStatusProps.error);
        actions.setSubmitting(false);
      }
      setDisplayFormStatus(true);
      setTimeout(() => {
        setDisplayFormStatus(false);
      }, 2000);
    };

    dispatch(createEventsActions.addEvent(newEvent, addEventHandler));
  };

  useEffect(() => {
    if (displayFormStatus) {
      toast(formStatus.message, {
        type:
          formStatus.type === FormStatusType.SUCCESS
            ? toast.TYPE.SUCCESS
            : toast.TYPE.ERROR,
      });
    }
  }, [displayFormStatus, formStatus]);

  return (
    <Container className={classes.root}>
      <AddEventForm
        addEvent={addEvent}
        displayFormStatus={displayFormStatus}
        formStatus={formStatus}
      />
    </Container>
  );
};

export default whithFade(AddEvent);
