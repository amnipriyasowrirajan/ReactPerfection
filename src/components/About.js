import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
        <h2> I am a Full-stack Developer.</h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <UserClass
          name={"Amnipriya "}
          location={"Markham,Canada "}
          contact={"amnipriya31@gmail.com"}
        />
      </div>
    );
  }
}
export default About;
