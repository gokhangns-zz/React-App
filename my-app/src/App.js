import React, { Component } from "react";
import AddUser from "./Components/AddUser";

class App extends Component {
  // state = {
  //   users : []
  // }
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Name 1",
          email: "name1@email"
        },
        {
          id: 2,
          name: "Name 2",
          email: "name2@email"
        },
        {
          id: 3,
          name: "Name 3 ",
          email: "name3@email"
        },
      ]

    };
  }
  render() {
    return (
      <div className="container" >
        <h4 className="card-header btn btn-success btn-block"> User App </h4>

        <AddUser />


      </div>
    );
  }
}

export default App;
