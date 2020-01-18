import React, {Component} from 'react';
// import "../style/css-final.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Search from './search';
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import "../style/navbar.css"

class Category extends Component{
    render(){
        return(
                <nav>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/Store" class="nav-link">Semua</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Store" class="nav-link">Terlaris</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Store" class="nav-link">Pedas</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Store" class="nav-link">Manis</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Store" class="nav-link">Masam</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Store" class="nav-link">Asin</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Store" class="nav-link">Halal</Link>
                    </li>
                </ul>
                </div>
            </nav> 
            </nav>
        );
    }
}

export default connect("", actions)(withRouter(Category));