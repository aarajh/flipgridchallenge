import React from 'react';
import { render,cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Confirmation from 'screens/Signup/Confirmation';

afterEach(cleanup)

test('renders the email and firstname', () => {
    const formData = { 
        firstName: 'TestUser',
        email: 'test@test.com',
            };
    const { getByTestId } = render(<Confirmation formData={formData}/>);
    expect(getByTestId("confirmation")).toHaveTextContent(formData.firstName);
    expect(getByTestId("confirmation")).toHaveTextContent(formData.email);
  });
