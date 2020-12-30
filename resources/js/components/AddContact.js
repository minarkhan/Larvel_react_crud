import React from "react";
import axios from "axios";

class AddContact extends React.Component{
    state = {
        fullName : '',
        email : '',
        phone : ''
    }
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    saveContact = async (e) => {
        e.preventDefault();
        axios.post("/contact", this.state);
        const res = await axios.post("/contact", this.state);
        this.setState({fullName:'', email:'', phone:''});
        if(res.data.status === 200){
            this.props.history.push("/");
        }
        // console.log(res);
    }


    render(){
        return (
            <div>
                <form onSubmit={this.saveContact}>
                    <h1>AddContacts</h1>
                    <div className="form-group">
                        <input type="text" name="fullName" className="form-control" value={this.state.fullName} onChange={this.handleInput} placeholder="Enter full Name" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleInput} placeholder="Enter email" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" className="form-control" value={this.state.phone} onChange={this.handleInput} placeholder="Enter phone" required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="submit" className="btn btn-primary" value="Add Contact "/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact;