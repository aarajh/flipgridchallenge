import React from 'react';
import { render } from '@testing-library/react';
import App from '.././App';

test('Renders Signup Form', () => {
  const { getByText } = render(<App />);
  const definingElement = getByText("Sign up");
  expect(definingElement).toBeInTheDocument();
});
