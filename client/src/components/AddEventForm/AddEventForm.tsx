import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Formik, Field, Form, FormikProps, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import { DateTimePicker } from "formik-material-ui-pickers";
import * as Yup from "yup";

import { IAddEventForm, IFormStatus } from "../../models/Interfaces";
import { FormStatusType } from "../../models/Enum";

import classes from "./AddEventForm.module.scss";

import messages from "./AddEventForm.messages";

interface AddEventFormProps {
  addEvent: (
    eventToAdd: IAddEventForm,
    actions: FormikHelpers<IAddEventForm>
  ) => void;
  displayFormStatus: boolean;
  formStatus: IFormStatus;
}

const AddEventForm: React.FunctionComponent<AddEventFormProps> = (
  props
): JSX.Element => {
  const { addEvent, displayFormStatus, formStatus } = props;

  const initialValues: IAddEventForm = {
    firstName: "",
    lastName: "",
    email: "",
    eventDate: null,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(messages.firstNameValidationMessage),
    lastName: Yup.string().required(messages.lastNameValidationMessage),
    email: Yup.string().email(messages.emailValidationMessage).required(messages.emailValidationMessage),
    eventDate: Yup.date()
      .nullable()
      .required(messages.eventDateValidationMessage),
  });

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        onSubmit={addEvent}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<IAddEventForm>) => {
          const { isSubmitting } = props;
          return (
            <Form>
              <h1 className={classes.title}>{messages.addEvent}</h1>
              <Grid container justifyContent="space-around" direction="row">
                <Grid item xs={10} className={classes.textField}>
                  <Field
                    id="firstName"
                    component={TextField}
                    name="firstName"
                    type="text"
                    label={messages.firstName}
                  />
                </Grid>
                <Grid item xs={10} className={classes.textField}>
                  <Field
                    id="lastName"
                    component={TextField}
                    name="lastName"
                    type="text"
                    label={messages.lastName}
                  />
                </Grid>
                <Grid item xs={10} className={classes.textField}>
                  <Field
                    id="email"
                    component={TextField}
                    name="email"
                    type="email"
                    label={messages.email}
                  />
                </Grid>
                <Grid item xs={10} className={classes.textField}>
                  <Field
                    id="eventDate"
                    component={DateTimePicker}
                    name="eventDate"
                    label={messages.eventDate}
                  />
                </Grid>
                <Grid item xs={10} className={classes.submitButton}>
                  <Button
                    disableElevation
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                  >
                    {messages.submit}
                  </Button>
                  {displayFormStatus && (
                    <div>
                      {formStatus.type === FormStatusType.ERROR ? (
                        <p className={classes.errorMessage}>
                          {formStatus.message}
                        </p>
                      ) : formStatus.type === FormStatusType.SUCCESS ? (
                        <p className={classes.successMessage}>
                          {formStatus.message}
                        </p>
                      ) : null}
                    </div>
                  )}
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddEventForm;
