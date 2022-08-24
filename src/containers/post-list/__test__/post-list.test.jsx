import React from "react";
import { render, screen } from "@utils/test-utils";

import PostList from "../index";

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<PostList {...setupStore} />, {});
};

describe("Test for PostList page component", () => {
  test("Should render without errors", () => {
    setup();
    expect(screen.getByTestId("PostList")).toBeTruthy();
  });

  test("Should renders the same component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
