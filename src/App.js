import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
//lazy loading=>when you are app is load it will not load for grocery(we wont load everything directly.load it when required)
// On Demand Loading=> whenever there is a demand whenever the user is going on the particular page then only load the page
// Initialially im not loading when i go to the grocery page i load it.
//-----------------------------------------
// lazy is a function is given to us by react
const Grocery = lazy(() => import("./components/Grocery"));

// dynamic import

const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* this outlet will be filled  with the children according to the path */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading ....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
