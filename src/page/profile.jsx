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
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        const fullname = localStorage.getItem("fullname");
        const phone = localStorage.getItem("phone_number");
        const address = localStorage.getItem("address");
        const email = localStorage.getItem("email");
        const city = localStorage.getItem("city");
        const image = localStorage.getItem("image");
        const shop_name = localStorage.getItem("shop_name");

        if (token!==null){
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
                                <span className="username-out">{username}</span>
                                <span className="fullname">Fullname</span>
                                <span className="fullname-out">{fullname}</span>
                                <span className="address">Address</span>
                                <span className="address-out">{address}</span>
                                <span className="city">City</span>
                                <span className="city-out">{city}</span>
                                <span className="phone">Phone number</span>
                                <span className="phone-out">{phone}</span>
                                <span className="email">Email</span>
                                <span className="email-out">{email}</span>
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
export default connect('', actions
)(withRouter(Profile));