import React, { Component } from "react";



class Users extends Component {

   
    render() {
        // const users = this.props.User;
        const { Users,deleteUser } = this.props;

        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map(User => {
                        const { id, name, email } = User;
                        return <User key={id} id={id} name={name} email={email} deleteUser = {deleteUser} />
                    })}
                </tbody>

                <tbody>
                    {Users.map(User => {
                        const { id, name, email } = User;

                        return <User key={id} id={id} name={name} email={email} />;

                    })}

                </tbody>

            </table>
        );
    }
}

export default Users;