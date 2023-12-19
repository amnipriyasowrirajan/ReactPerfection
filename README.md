# React Excellence 🚀

# Parcel

https://parceljs.org/

- Dev Build
- Local Server
- HMR-Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling - all the files minified
- Compression
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- Reliable Caching
- HTTPS
- Tree Shaking - Remove unused code
- Lazy Mode
- Different dev and prod bundles

Creating a food order Website

- here i used config driven api
- Restructuring files
  -create a src folder

// JSX => it is not HTML in Js =>HTML LIKE SYNTAX=> it looks like html
// JSX (transpiled before it reaches the Js) - PARSEL -BABEL
// JSX => Babel transpiled it to React.createElement => ReactElement-Js Object => HTMLElement(render)
//
Header
-logo
-navbar
Body

- search
- RestaurantContainer - RestaurantCard
  -cloudinaryImageId
  -name of res,Star Rating,cuisine,Delivery tie etc
  Footer
- Copyright
- Links
- Address
- Contact

//

There are two types of Import/Export

-Default Export/Import

export default < name of Component name>;
import Component from "path";

- Named Export/Import

export const Conmponent;
import {Component} from "path";

--

# React Hooks

- they are normal js Function- written by fb developer
- i install in react right.In a node_modules,i got all the utility function into a code
- there are 2 most important hooks

  - 90 % of use this hooks
  - useState() =>Superpowerful State Variables in react
  - useEffect() =>If there is no dependency array => useEffect is called on every render
    => If dependency array is empty = [] => useEffect is called on Initial render (Just Once)
    => If dependency array is [btnName] => called everytime btnName is updated

- I use shimmer UI => while loadng it shows fake cards

- Here i use createBrowserRouter for further details click on below link and read it out then you get a clear view
  https://reactrouter.com/en/main/routers/create-browser-router

- this outlet will be filled with the children according to the path
  <Outlet />
- Link=> it works similar like a anchor tag.

# 2 types of Routing in web apps

- Client Side Routing => it reloads components
- Server Side Routing => it reloads the whole page(index.html,cotact.html)

# useParams => hooks => for id

- Chunking
- Code Splitting
- Dynamic Bundling
- i use dynamic import
- lazy loading=>when you are app is load it will not load for grocery(we wont load everything directly.load it when required)
- On Demand Loading=> whenever there is a demand whenever the user is going on the particular page then only load the page
- Initialially im not loading when i go to the grocery page i load it.
  //-----------------------------------------
- lazy is a function is given to us by react

- I used lazy loading in grocery page
- i used suspence

- I use PostCSS and TailwindCSS

npm install -D tailwindcss postcss
npx tailwindcss init

- create a .postcssrc file

- check out the link https://tailwindcss.com/docs/guides/parcel

- Here i use High Order Function to enhance it -> Discount Label

- Here i use Lifting the state in React=>Remove state from both of them, move it to their closest common parent, and then pass it down to them via props.
- Avoid Props Drilling when you use large scale application=> occurs when a parent component generates its state and passes it down as props to its children components that do not consume the props – instead, they only pass it down to another component that finally consumes it.

- Redux offers two libraries =>https://redux.js.org/
  - React-Redux
  - Redux Toolkit => The Redux Toolkit package is intended to be the standard way to write Redux logic.

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build Our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing => e2e Testing

# Setting up testing in my app

=> React Library Testing (https://testing-library.com/docs/react-testing-library/intro/)

# install react testing library => npm i -D @testing-library/react

=> Jest(Jest is a delightful JavaScript Testing Framework with a focus on simplicity.)=>(https://jestjs.io/)

https://jestjs.io/docs/getting-started

# install jest =>npm i -D jest

# install Babel Dependencies=> npm install --save-dev babel-jest @babel/core @babel/preset-env

- create babel config file

https://parceljs.org/languages/javascript/#usage-with-other-tools

# study it

- https://parceljs.org/languages/javascript/#babel

- Configure Parcel config file to disable default babel transpilation

- create a new file .parcelrc

- npm run test

# Jest Configuration=>(npx jest --init)

# Install jsdom library (https://testing-library.com/docs/react-testing-library/setup#jest-28)

- If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.

- npm install --save-dev jest-environment-jsdom

- Install this Library =>npm i @babel/preset-react => to make JSX work in test cases
- Include @babel/preset-react inside my babel Config
  [("@babel/preset-react", { runtime: "automatic" })],
- Install @testing-library/jest-dom => to access toBeInTheDocument()
- npm i -D @testing-library/jest-dom

# integration Testing in Search Bar

- changes in package.json
- npm run watch-test
