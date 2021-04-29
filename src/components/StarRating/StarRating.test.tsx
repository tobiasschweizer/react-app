import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import StarRating from './StarRating';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('<StarRating />', () => {

  let container: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('it renders', () => {
    act(() => {
      render(<StarRating label="Kit"/>, container);
    });
    expect(container.textContent).toBe("Starring Kit");
  });
});
