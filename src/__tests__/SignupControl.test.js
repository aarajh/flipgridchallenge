import React from 'react';
import { render,cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import SignupControl from 'screens/Signup/';

afterEach(cleanup)

test('renders form by default', () => {
    const ref = React.createRef();
    const { getByText } = render(<SignupControl ref={ref} />);
    const definingElement = getByText("Sign up");
    expect(definingElement).toBeInTheDocument();
  });

// Tests whole functionality
// i.e. The user enters valid info and submits, is redirected
// to Confirmation.
test('routes to confirmation when formData submitted', () => {
    const ref = React.createRef();
    const { getByText, getByTestId } = render(<SignupControl ref={ref} />);
    const formData = { 
        firstName: 'TestUser',
        email: 'test@test.com',
        password: 'supersecretpassword'
        };
    fireEvent.change(getByTestId("firstNameField"), { target: { value: formData.firstName }});
    fireEvent.change(getByTestId("emailField"), { target: { value: formData.email }});
    fireEvent.change(getByTestId("passwordField"), { target: { value: formData.password }});
    fireEvent.click(getByTestId("button"))
    expect(getByTestId("confirmation")).toBeInTheDocument();
    expect(getByTestId("confirmation")).toHaveTextContent(formData.email);
    expect(getByTestId("confirmation")).toHaveTextContent(formData.firstName);
  });
