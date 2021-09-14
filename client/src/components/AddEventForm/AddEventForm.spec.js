import { act } from "react-dom/test-utils";

// import { prettyDOM } from "@testing-library/dom";
import { render, fireEvent } from "@testing-library/react";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

import {
  fillInputsWithValues,
  checkElementsExistsQueryByText,
} from "../../utils/testUtils";

import AddEventForm from "./AddEventForm";

import messages from "./AddEventForm.messages";

// -------------------------------------------
/*
  Temporarily mute console error messages
  from formik-material-ui-pickers/DateTimePicker
  */
let originalError;
// -------------------------------------------

const mockOnSubmit = jest.fn();
let component,
  inputFirstName,
  inputLastName,
  inputEmail,
  inputsArray,
  inputEventDate,
  formSubmitButton;

describe("Add event form", () => {
  beforeAll(() => {
    originalError = console.error;
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalError;
  });

  beforeEach(() => {
    component = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AddEventForm addEvent={mockOnSubmit} />
      </MuiPickersUtilsProvider>
    );

    inputFirstName = component.getByLabelText(messages.firstName);
    inputLastName = component.getByLabelText(messages.lastName);
    inputEmail = component.getByLabelText(messages.email);

    inputsArray = [inputFirstName, inputLastName, inputEmail];

    inputEventDate = component.getByLabelText(messages.eventDate);
    formSubmitButton = component.getByText(messages.submit);
  });

  test("With valid inputs", async () => {
    fillInputsWithValues(inputsArray, ["Juan", "Rodríguez", "juan@email.com"]);

    fireEvent.click(inputEventDate);

    await act(async () => {
      const datetimeButtonOk = component.getByText("OK");
      await fireEvent.click(datetimeButtonOk);
      fireEvent.click(formSubmitButton);
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  test("With invalid email", async () => {
    fillInputsWithValues(inputsArray, ["Juan", "Rodríguez", "invalid email"]);

    fireEvent.click(inputEventDate);

    await act(async () => {
      const datetimeButtonOk = component.queryByText("OK");
      await fireEvent.click(datetimeButtonOk);
      fireEvent.click(formSubmitButton);
    });

    checkElementsExistsQueryByText(
      messages.emailValidationMessage,
      component,
      true
    );

    checkElementsExistsQueryByText(
      messages.firstNameValidationMessage,
      component,
      false
    );

    expect(mockOnSubmit).toHaveBeenCalledTimes(0);
  });

  test("Without inputs", async () => {
    await act(async () => {
      fireEvent.click(formSubmitButton);
    });

    [
      messages.firstNameValidationMessage,
      messages.lastNameValidationMessage,
      messages.emailValidationMessage,
      messages.eventDateValidationMessage,
    ].forEach((valMsg) => {
      checkElementsExistsQueryByText(valMsg, component, true);
    });

    expect(mockOnSubmit).toHaveBeenCalledTimes(0);

    // console.log(prettyDOM(component.container));
  });
});
