import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log(" Parent constructor ");
  }
  componentDidMount() {
    // console.log("parent component did mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2> I am in canada . i get a wonderful mern developer job</h2>
        {/* <User
          name={"Amnipriya (function)"}
          location={"Markham,Canada (function)"}
          contact={"amnipriya31@gmail.com(function)"}
        /> */}
        <UserClass
          name={"Amnipriya (class)"}
          location={"Markham,Canada (class)"}
          contact={"amnipriya31@gmail.com(class)"}
        />
      </div>
    );
  }
}
export default About;
