import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    // API call

    const data = await fetch(
      "https://api.github.com/users/amnipriyasowrirajan"
    );

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  // API call

  // console.log("Child - ComponentDidMount");

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "child render");
    const { name, location, contact, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name} </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * -------------------Mounting Lifecycle -----------------------
 * Constructor called(dummy)
 * Render(dummy)
 *        <HTML Dummy>
 * Component Did Mount
 *          <API CALL>
 *          <this.setState> => State Variable is Updated
 *
 *--------UPDATE
 *
 *      render(API DATA)
 *      <HTML Loaded with(new API DATA>)
 *     ComponentDid Update
 *
 *
 */
