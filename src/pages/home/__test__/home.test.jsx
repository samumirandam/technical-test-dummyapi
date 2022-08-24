import React from "react";
import { render, screen } from "@utils/test-utils";

import Home from "../index";

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Home {...setupStore} />, {});
};

describe("Test for Home page component", () => {
  test("Should render without errors", () => {
    setup();
    expect(screen.getByTestId("Home")).toBeTruthy();
  });

  test("Should renders the same component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test("Should render with data", () => {
    const props = {
      postList: {
        data: {
          data: [
            {
              id: "60d21b4667d0d8992e610c85",
              image:
                "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
              likes: 43,
              tags: ["animal", "dog", "golden retriever"],
              text: "adult Labrador retriever",
              publishDate: "2020-05-24T14:53:17.598Z",
              owner: {
                id: "60d0fe4f5311236168a109ca",
                title: "ms",
                firstName: "Sara",
                lastName: "Andersen",
                picture: "https://randomuser.me/api/portraits/women/58.jpg",
              },
            },
          ],
        },
      },
    };
    setup(props);
    expect(screen.getByText("adult Labrador retriever")).toBeTruthy();
  });
});
