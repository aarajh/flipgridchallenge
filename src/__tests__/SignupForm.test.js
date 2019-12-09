import React from 'react';
import { render,cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import SignupForm from 'screens/Signup/SignupForm';

afterEach(cleanup)

test('renders header,helpertext and form', () => {
    const { getByTestId } = render(<SignupForm dispatchFormData={jest.fn()}/>);
    expect(getByTestId("formHeader")).toBeVisible();
    expect(getByTestId("formHelperText")).toBeVisible();
    expect(getByTestId("formItself")).toBeVisible();
  });

//Function to fill out the form with the formData provided.
function setupForm(ref,formData){
    const { getByTestId } = render(<SignupForm ref={ref} dispatchFormData={jest.fn()}/>);
    fireEvent.change(getByTestId("firstNameField"), { target: { value: formData.firstName }});
    fireEvent.change(getByTestId("emailField"), { target: { value: formData.email }});
    fireEvent.change(getByTestId("passwordField"), { target: { value: formData.password }});
    fireEvent.click(getByTestId("button"))
    return getByTestId;
}

test('input data stored in state', () => {
    const ref = React.createRef();
    const formData = { 
        firstName: 'Test Name',
        email: 'test@test.com',
        password: 'supersecretpassword'
            };

    setupForm(ref,formData);
    expect(ref.current.state.formData).toEqual(formData);
  });

test('empty fields show errors', () => {
    const ref = React.createRef();
    const formData = { 
        firstName: '',
        email: '',
        password: ''
            };
    const getByTestId = setupForm(ref,formData);
    expect(getByTestId("firstName")).toHaveTextContent("Required");
    expect(getByTestId("email")).toHaveTextContent("Required");
    expect(getByTestId("password")).toHaveTextContent("Required");
  });

test('basic email validation', () => {
    const ref = React.createRef();
    const formData = { 
        firstName: 'Test User',
        email: 'notanemail',
        password: 'supersecretpassword'
            };
    const getByTestId = setupForm(ref,formData);
    expect(getByTestId("email")).toHaveTextContent("Invalid");
  });

