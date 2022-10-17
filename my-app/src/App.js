import React, { Component } from "react";
import AddUser from "./Components/AddUser";
import Users from "./Components/Users";



class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      Users: [
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
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  addUser(newUser) {
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users: updatedUsers
    })
  }
  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(user => user.id !== id);
    //state direct ımmutable
    this.setState({
      users: updatedUsers
    })
  }

  render() {
    return (
      <div className="container" >

        <h4 className=" btn btn-success btn-block"> User App </h4>
        <hr />

        <AddUser addUser={this.addUser} />
        <hr />

        <Users deleteUser={this.deleteUser} users={this.state.users} />


      </div>
    )
  }
}
export default App;