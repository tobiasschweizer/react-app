import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import StarRating from './StarRating';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('<StarRating />', () => {

  let container: HTMLDivElement | null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container!);
    container!.remove();
    container = null;
  });

  test('it renders the initial state', () => {
    act(() => {
      render(<StarRating label='Kit'/>, container);
    });

    expect(container!.querySelector('.starring')!.textContent).toBe('Starring Kit 0');
  });

  test('it updates the initial state on click', () => {
    act(() => {
      render(<StarRating label='Kit'/>, container);
    });

    expect(container!.querySelector('.starring')!.textContent).toBe('Starring Kit 0');

    const button = container!.querySelector('button');

    act(() => {
      button!.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(container!.querySelector('.starring')!.textContent).toBe('Starring Kit 1');

  });


});
