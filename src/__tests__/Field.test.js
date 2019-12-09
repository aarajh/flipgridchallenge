import React from 'react';
import { render,cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Field from 'components/Field/';
import renderer from "react-test-renderer"

afterEach(cleanup)

test('renders default Field', () => {
  const { getByTestId } = render(<Field onChange={jest.fn()} />);
  expect(getByTestId("field")).toHaveTextContent("Field");
});

test('renders custom label', () => {
    const { getByTestId } = render(<Field onChange={jest.fn()} label="Name" />);
    expect(getByTestId("field")).toHaveTextContent("Name");
});

//Test mocks updating the Field to check if the onChange function is called.
test('onChange passed works',()=>{
  const onChange = jest.fn();
  const {getByTestId}=render(<Field onChange={onChange}/>);
  fireEvent.change(getByTestId("inputfield"), { target: { value: 'Test Input' }});
  expect(onChange).toHaveBeenCalled();
});
  
test("matches snapshot", ()=>{
    const tree=renderer.create(<Field/>).toJSON();
    expect(tree).toMatchSnapshot()
})