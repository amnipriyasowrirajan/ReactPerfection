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
- Bundling
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

# useParams => hooks
