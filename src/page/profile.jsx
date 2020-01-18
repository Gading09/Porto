import React from 'react';
import '../style/bootstrap.min.css';
import axios from "axios";
import {store, actions} from '../store';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'unistore/react';
import "../style/profile.css"
import Navbar from "../component/navbar"

class Profile extends React.Component{

    render(){
        if (this.props.is_login==true){
            return(
                <nav>
                    <Navbar/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 profile">
                                <img className="kayu" src={require("../image/background_profile.jpeg")} alt=""/>
                                <img className="putih" src={require("../image/putih.png")} alt=""/>
                                <img className="foto" src={require("../image/hedy.png")} alt=""/>
                                <span className="username">Username</span>
                                <span className="fullname">Fullname</span>
                                <span className="address">Address</span>
                                <span className="city">City</span>
                                <span className="phone">Phone number</span>
                                <span className="email">Email</span>
                            </div>
                        </div>
                    </div>
                </nav>
                
            )
        }
        else{
            alert("You are not logged in")
            return <Redirect to={{ pathname: "/" }} />;
        }
    }
}
export default connect('is_login', actions
)(withRouter(Profile));