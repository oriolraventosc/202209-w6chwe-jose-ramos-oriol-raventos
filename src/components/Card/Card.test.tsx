import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an article", () => {
      render(
        <Provider store={store}>
          <Card />
        </Provider>
      );

      const article = screen.queryByRole("article");

      expect(article).toBeInTheDocument();
    });
  });
});
