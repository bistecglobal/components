import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    const props = {
        title: 'Example/Button',
        component: Button,
        argTypes: {
          backgroundColor: { control: 'color' },
        },
        label: 'button'
      }
  it('should render successfully', () => {
    const { baseElement } = render(<Button {...props}/>);
    expect(baseElement).toBeTruthy();
  });
});