import React from 'react';
import * as rtl from 'react-testing-library';
import Display from './Display';

afterEach(rtl.cleanup);

describe('Display', () => {
  it('should display balls and strikes elements', () => {
    const displayComponent = rtl.render(<Display balls={0} strikes={0} />);
    expect(displayComponent.getByText(/Balls/g));
    expect(displayComponent.getByText(/Strikes/g));
  });
  it('should display the number of balls', () => {
    const displayComponent = rtl.render(<Display balls={2} strikes={0} />);
    expect(displayComponent.getByText(/Balls: 2/g));
  });
  it('should display the number of strikes', () => {
    const displayComponent = rtl.render(<Display balls={0} strikes={2} />);
    expect(displayComponent.getByText(/Strikes: 2/g));
  });
  it('should display 0 when no props are given', () => {
    const displayComponent = rtl.render(<Display />);
    expect(displayComponent.getByText(/Strikes: 0/g));
    expect(displayComponent.getByText(/Balls: 0/g));
  });
});
