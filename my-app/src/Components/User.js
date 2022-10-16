import React, {Component} from "react";


class User extends Component{

    // constructor(props){
    //     super(props);

    //     this.onDeleteClick = this.onDeleteClick.bind(this);
    // }
    onDeleteClick(id,e) {
        console.log("ID:",id);

        // console.log("Clicked");
        // console.log(this);
        
    }
    // onDeleteClick = e => {
    //     console.log("Clicked");
    //     console.log(this);
        
    // }


    render(){
        const {id, name, email} = this.props;

        return(
            <tr>
                <td>{id}</td>
                <th>{name}</th>
                <th>{email}</th>
                <th>
                    <button onClick={this.onDeleteClick.bind(this, id)} className="btn btn-danger" >Delete</button>
                </th>
            </tr>
        )
    }
}
export default User;