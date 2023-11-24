import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        contact: "default@gmail.com",
        avator_url:
          "https://i.pinimg.com/564x/52/07/62/5207621ae23340f506c1c25e3c884601.jpg",
      },
    };
    // console.log(this.props.name + "child Constructor");
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    // API call

    // console.log("Child - ComponentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevProps.count) {
      // code
    }
    if (this.state.count2 !== prevProps.count2) {
      // code
    }
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Component will unmount => remove");
  }

  render() {
    console.log(this.props.name + "child render");
    const { name, location, contact, avator_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avator_url} />
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
