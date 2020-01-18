import React, {Component} from 'react';
// import "../style/css-final.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Search from './search';
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import ModalSignIn from '../component/modalSignIn'
import ModalSignUp from '../component/modalSignUp'
import "../style/navbar.css"

class Navbar extends Component{
    postSignout = async () => {
        console.warn("nama username = ", this.props.username)
        await localStorage.removeItem("token");
        await localStorage.removeItem("role");
        await localStorage.removeItem("phone_number");
        await localStorage.removeItem("image");
        await localStorage.removeItem("address");
        await localStorage.removeItem("shopname");
        await localStorage.removeItem("username");
        await localStorage.removeItem("email");
        await localStorage.removeItem("city");
        await localStorage.removeItem("shop_name");
        await localStorage.removeItem("fullname");
        await store.setState({"is_login": false});
        alert("logout succses!!!")
        // localStorage.clear()
        this.props.history.push("/");
    };
    render (){
        const role = localStorage.getItem("role");
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        return(
                <header>
                <ModalSignUp/>
                <ModalSignIn/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"><a class="navbar-brand navbar-logooo" href="#">E-mie</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul class="navbar-nav mr-auto">
                    {/* {headerKategori} */}    
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    {token !== null?
                    (<React.Fragment>
                        <li class="nav-item">
                            <Link to="/profile" class="nav-link">Profile</Link>
                        </li></React.Fragment>):
                    (
                    <React.Fragment></React.Fragment>)
                  }
                    
                    <li class="nav-item">
                        <Link to="/blank" class="nav-link"> Recipe Article </Link>
                    </li>
                </ul>
                {/* <Search {...this.props}/> */}
                <ul class="navbar-nav ml-lg-5">
                  {token !== null ?
                    (<React.Fragment>
                        {role === 'seller'?
                        
                        <li class="nav-item">
                           <Link to="/addproduct" class="nav-link"> Add Product</Link>
                       </li>
                        :
                        
                        <li class="nav-item">
                            <Link to="/store" class="nav-link"> Store</Link>
                        </li>
                        }
                    <li class="nav-item">
                        <a className="nav-link">Hello, {username} |</a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" onClick={this.postSignout}>Logout</Link>
                    </li></React.Fragment>):
                    (
                    <React.Fragment>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="modal" data-target="#exampleModalCenter" type='button'>Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="modal" data-target="#exampleModalCenter1" type='button'>Sign Up</a>
                    </li></React.Fragment>)
                  }
                  <li class="nav-item">
                    <Link to="/cart" class="nav-link"><i class="fa fa-shopping-cart"></i></Link>
                  </li>
                </ul>
                </div>
            </nav> 
            </header>
        );
    }
}

export default connect("is_login, username", actions)(withRouter(Navbar));