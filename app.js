/**
*
* <div id="parent">
* <div id="child">
* <h1>I'm h1 tag</h1>
*if i want to create another siblings like h2
*<h2> i'm h2 tag </h2> =>create a array of children  
* </div>
* </div>
*
*
*/
const parent = React.createElement("div",{ id: "parent" },
    [ React.createElement ("div", { id: "child" },
    [React.createElement("h1", {},"I'm h1 tag")
    ,React.createElement("h2",{},"I'm an h2 tag")
    

    ]),
    React.createElement ("div", { id: "child2" },
    [React.createElement("h1", {},"I'm h1 tag")
    ,React.createElement("h2",{},"I'm an h2 tag")
    

    ]),
]);
    console.log(parent); // object O
    const root = ReactDOM.createRoot (document.getElementById("root"));
    root.render (parent);