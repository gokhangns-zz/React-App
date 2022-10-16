import React, { Component } from "react";


class AddUser extends Component {
  
    render() {
        return (
            <div className="card" >
                
                <div className="card-body">
                    <form>
                        <div className="form-group" >
                            <label htmlFor="name" >Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Name" className="form-control" />
                        </div>
                        <div className="form-group" >
                            <label htmlFor="email" >Email</label>
                            <input type="text" name="Email" id="email" placeholder="Enter Email" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-danger btn-block" > Add New User</button>

                    </form>


                </div>
            </div>
        );
    }

}

export default AddUser;
