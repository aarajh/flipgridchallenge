import React from 'react';
import { render,cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Button from 'components/Button/';
import renderer from "react-test-renderer"

afterEach(cleanup)

test('renders default button', () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId("button")).toHaveTextContent("DefaultButton");
});

test('renders custom button', () => {
    const { getByTestId } = render(<Button label="Sign up" />);
    expect(getByTestId("button")).toHaveTextContent("Sign up");
});

//Test mocks clicking the button to check if the onClick ftn is called.
test('onClick passed works',()=>{
  const onClick = jest.fn();
  const {getByTestId}=render(<Button onClick={onClick}/>);
  fireEvent.click(getByTestId("button"));
  expect(onClick).toHaveBeenCalled();
});
  
test("matches snapshot", ()=>{
    const tree=renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot()
})