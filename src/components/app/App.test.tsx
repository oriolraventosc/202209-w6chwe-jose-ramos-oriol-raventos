import App from "./App";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 title with the text 'Robots list'", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const heading = screen.queryByRole("heading", {
        name: "Robots List",
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a span with the text 'Ready to explore among a lot of robots?'", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const subtitle = screen.queryByLabelText("Explore among a lot of robots");

      expect(subtitle).toBeInTheDocument();
    });

    test("Then it should show an article", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const article = screen.queryByRole("article");

      expect(article).toBeInTheDocument();
    });
  });
});
