import React from 'react';
import {Link} from 'react-router-dom';

class Contact extends React.Component{
    render(){
        const {contact} = this.props;
        return(
            <div className="card mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <span className="image">{contact.fullName[0]}</span>
                        </div>
                        <div className="col-md-2">
                            {contact.fullName}
                        </div>
                        <div className="col-md-2">
                            {contact.email}
                        </div>
                        <div className="col-md-2">
                            {contact.phone}
                        </div>
                        <div className="col-md-2">
                            <Link className="btn btn-warning" to={`/edit/${contact.id}`}>Edit</Link>
                        </div>
                        <div className="col-md-2">
                            <Link to={`/delete/${contact.id}`} className="btn btn-danger">Delete</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;