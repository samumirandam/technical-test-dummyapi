import React from "react";
import { render, screen, fireEvent } from "@utils/test-utils";

import Home from "../index";

const defaultProps = {
  postList: {
    data: {
      data: [
        {
          id: "60d21b4667d0d8992e610c85",
          image: "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
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
      total: 20,
    },
  },
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Home {...setupStore} />, {});
};

describe("Test for Home page component", () => {
  test("Should render without errors", () => {
    setup();
    expect(screen.getByText("adult Labrador retriever")).toBeTruthy();
  });

  test("Should renders the same component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test("Should render without data", () => {
    const props = {
      postList: {
        data: {
          data: [],
        },
      },
    };
    setup(props);
    expect(screen.getByTestId("Home")).toBeTruthy();
  });

  test("Should render click in open user profile", () => {
    setup();
    fireEvent.click(screen.getByText("Sara Andersen"));
    expect(screen.getByText("Información del usuario")).toBeTruthy();
    fireEvent.click(screen.getAllByText("Cerrar")[0]);
  });

  test("Should render click in open comments", () => {
    setup();
    fireEvent.click(screen.getAllByText("Comentarios")[0]);
    expect(screen.getAllByText("Comentarios")[1]).toBeTruthy();
    fireEvent.click(screen.getAllByText("Cerrar")[1]);
  });

  test("Should render click get more posts", () => {
    setup();
    fireEvent.click(screen.getByText("Cargar más posts"));
    expect(screen.getByText("Sara Andersen")).toBeTruthy();
  });

  test("Should render click get more posts", () => {
    setup();
    fireEvent.click(screen.getByText("dog"));
    expect(global.window.location.pathname).toEqual("/tag/dog");
    fireEvent.click(screen.getByText("Cargar más posts"));
    expect(screen.getByText("Sara Andersen")).toBeTruthy();
  });

  test("Should render loading state", () => {
    const props = {
      postList: {
        isLoading: true,
      },
    };
    setup(props);
    expect(screen.getByTestId("Loader")).toBeTruthy();
  });

  test("Should render error state", () => {
    const props = {
      postList: {
        isError: true,
        errorDetail: "test error",
      },
    };
    setup(props);
    expect(screen.getByText("test error")).toBeTruthy();
  });
});
