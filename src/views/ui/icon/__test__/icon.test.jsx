import React from "react";
import { render, screen } from "@utils/test-utils";

import Icon from "../index";

const defaultProps = {
  text: "icon text test",
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Icon {...setupStore} />, {});
};

describe("Test for Icon ui component", () => {
  test("Should render without errors", () => {
    setup();
    expect(screen.getByText("icon text test")).toBeTruthy();
  });

  test("Should renders the same component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
