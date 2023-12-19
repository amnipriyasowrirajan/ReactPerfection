import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import MOCK_DATA_MENU from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_MENU),
  })
);

it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />

          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Mini Biryanis (3)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(3);
  expect(screen.getByText("Cart -( 0 items)")).toBeInTheDocument();
  const addBtn = screen.getAllByRole("button", { name: "ADD +" });
  //   console.log(addBtn.length);

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart -( 1 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart -( 2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(3);

  expect(
    screen.getByText("Cart is empty. Add Items to the Cart!")
  ).toBeInTheDocument();
});
