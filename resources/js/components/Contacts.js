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
    render(){
        if(this.state.loading){
            return <h1>Loading...</h1>
        }
        return (
        <div>
            {this.state.contacts.map(contact=>(<Contact contact = {contact} key = {contact.id}/>))}
        </div>
        )
    }
}

export default Contacts; 