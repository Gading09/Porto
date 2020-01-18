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

class SemiNavbar extends Component{
    render(){
        return(
                <nav>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" style={{paddingTop:"2px"}}>
                        <Link to="/listproduct" class="nav-link" class="lihat_semua">Lihat Semua</Link>
                    </li>
                </ul>
                </div>
            </nav> 
            </nav>
        );
    }
}

export default connect("", actions)(withRouter(SemiNavbar));