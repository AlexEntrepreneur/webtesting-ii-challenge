import React from 'react';
import * as rtl from 'react-testing-library';
import App from '../App';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Dashboard', () => {
  it('should render buttons', () => {
    const dashboardComponent = rtl.render(<Dashboard />);
    expect(dashboardComponent.getByText(/Strike/g));
    expect(dashboardComponent.getByText(/Ball/g));
    expect(dashboardComponent.getByText(/Foul/g));
    expect(dashboardComponent.getByText(/Hit/g));
  });

  it('should increase balls count by one when clicking on ball button', () => {
    const appComponent = rtl.render(<App />);
    expect(appComponent.getByText(/Balls: 0/g));
    rtl.fireEvent.click(appComponent.getByTestId('ball-button'));
    expect(appComponent.getByText(/Balls: 1/g));
  });

  it('should increase strikes count by one when clicking on strike button', () => {
    const appComponent = rtl.render(<App />);
    expect(appComponent.getByText(/Strikes: 0/g));
    rtl.fireEvent.click(appComponent.getByTestId('strike-button'));
    expect(appComponent.getByText(/Strikes: 1/g));
  });

  it('should reset strikes & balls count when clicking on hit', () => {
    const appComponent = rtl.render(<App />);
    rtl.fireEvent.click(appComponent.getByTestId('ball-button'));
    rtl.fireEvent.click(appComponent.getByTestId('strike-button'));
    expect(appComponent.getByText(/Balls: 1/g));
    expect(appComponent.getByText(/Strikes: 1/g));
    rtl.fireEvent.click(appComponent.getByTestId('hit-button'));
    expect(appComponent.getByText(/Balls: 0/g));
    expect(appComponent.getByText(/Strikes: 0/g));
  });

  it('should reset all counts if strikes is 3', () => {
    const appComponent = rtl.render(<App />);
    for (let i = 0; i < 3; i++) {
      rtl.fireEvent.click(appComponent.getByTestId('strike-button'));
      if (i === 2) {
        expect(appComponent.getByText(/Strikes: 0/g));
      }
    }
  });
});
