import React from "react";
import axios from "axios";
import Axios from "axios";

class EditContact extends React.Component{
    state = {
        fullName : '',
        email : '',
        phone : ''
    }
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    updateContact = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/contact/${id}`, this.state);
        // const res = await axios.post("/contact", this.state);
        // this.setState({fullName:'', email:'', phone:''});
        if(res.data.status === 200){
            this.props.history.push("/");
        }
        // console.log(res);
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await Axios.get(`/contact/${id}/edit`);
        // console.log(res);
        this.setState({fullName:res.data.contact.fullName});
        this.setState({email:res.data.contact.email});
        this.setState({phone:res.data.contact.phone});
        
    }


    render(){
        return (
            <div>
                <form onSubmit={this.updateContact}>
                    <h1>EditContacts</h1>
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

export default EditContact;