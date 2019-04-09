import React from "react";
import * as rtl from "react-testing-library";
import Display from "./Display";

afterEach(rtl.cleanup);

describe("Display", () => {
  it("should display balls and strikes", () => {
    const displayComponent = rtl.render(<Display balls={0} strikes={0} />);
    expect(displayComponent.getByText(/balls/i));
    expect(displayComponent.getByText(/strikes/i));
  });
  it("should display the number of balls", () => {
    const displayComponent = rtl.render(<Display balls={2} strikes={0} />);
    expect(displayComponent.getByText(/balls: 2/i));
  });
  it("should display the number of strikes", () => {
    const displayComponent = rtl.render(<Display balls={0} strikes={2} />);
    expect(displayComponent.getByText(/strikes: 2/i));
  });
  it("should display 0 when no props are given", () => {
    const displayComponent = rtl.render(<Display />);
    expect(displayComponent.getByText(/strikes: 0/i));
    expect(displayComponent.getByText(/balls: 0/i));
  });
});
