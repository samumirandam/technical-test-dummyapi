import React from "react";
import { render, screen } from "@utils/test-utils";

import Home from "../index";

const defaultProps = {
  name: "name test",
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Home {...setupStore} />, {});
};

describe("Test for Home page component", () => {
  test("Should render without errors", () => {
    setup();
    expect(screen.getByText("name test")).toBeTruthy();
  });

  test("Should renders the same component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
