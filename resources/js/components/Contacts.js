import Axios from "axios";
import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component{
    state = {
        contacts:[],
        loading:true,
    }
    fetchContacts = async () => {
        const res = await Axios.get("/contact");
        if(res.data.status === 200){
            this.setState({contacts:res.data.contacts});
            this.setState({loading: false});
        }
        console.log(res);
    }

    componentDidMount(){
        this.fetchContacts();
    }

    deleteContact = async (id) => {
        const res = await Axios.delete(`/contact/${id}`);
        if(res.data.status === 2000){
            // this.fetchContacts();
            // console.log(res);
            this.props.history.push('/');
        }
    }

    render(){
        if(this.state.loading){
            return <h1>Loading...</h1>
        }
        return (
        <div>
            {this.state.contacts.map(contact=>(<Contact contact = {contact} key = {contact.id} deleteContact = {this.deleteContact}/>))}
        </div>
        )
    }
}

export default Contacts; 