import { fireEvent } from "@testing-library/react";

export const fillInputsWithValues = (_inputs, _values) => {
  _inputs.forEach((_input, i) => {
    fireEvent.change(_input, { target: { value: _values[i] } });
  });
};

export const checkElementsExistsQueryByText = (
  _text,
  _component,
  _mustToBe
) => {
  const element = _component.queryByText(_text);
  if (_mustToBe) {
    expect(element).toBeInTheDocument();
  } else {
    expect(element).not.toBeInTheDocument();
  }
};
