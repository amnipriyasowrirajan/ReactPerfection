import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
  // render the isolation of component
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // always good way to use getByRole compare to getByText
  const loginButton = screen.getByRole("button", { name: "Login" });

  // const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});
it("Should load Header Component with a Cart  items 0", () => {
  // render the isolation of component
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // always good way to use getByRole compare to getByText
  const cartItems = screen.getByText("Cart -( 0 items)");

  expect(cartItems).toBeInTheDocument();
});
it("Should load Header Component with a Cart  item", () => {
  // render the isolation of component
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // always good way to use getByRole compare to getByText
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});
it("Should load login button to Logout on click", () => {
  // render the isolation of component
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // always good way to use getByRole compare to getByText
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
