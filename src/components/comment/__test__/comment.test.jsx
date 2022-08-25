import React from "react";
import { render, screen } from "@utils/test-utils";

import Comment from "../index";

const defaultProps = {
  owner: {
    id: "60d0fe4f5311236168a109df",
    title: "mrs",
    firstName: "Anaelle",
    lastName: "Dumas",
    picture: "https://randomuser.me/api/portraits/med/women/25.jpg",
  },
  message: "comment test",
  publishDate: "2022-08-25T23:48:20.035Z",
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Comment {...setupStore} />, {});
};

describe("Test for Comment component", () => {
  test("Should render without errors", () => {
    setup();
    expect(screen.getByText("comment test")).toBeTruthy();
  });

  test("Should renders the same component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
