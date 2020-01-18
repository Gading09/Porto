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

class Search extends Component{
    choose = async (taste) => {
        await store.setState({ category_taste: taste })
        await this.props.category()
        await this.props.history.push(`/listproduct/`+this.props.category_taste)
    }
    choose2 = async (status) => {
        await store.setState({ halalStatus: status })
        await this.props.category()
        await this.props.history.push(`/listproduct/`+this.props.category_taste)
    }
    changeInput = async e => {
        console.warn("cek event target", e.target.name ,e.target.value);
        store.setState({ [e.target.name]: e.target.value });
        await this.props.FiturSearch()
        await this.props.history.push(`/listproduct/`+this.props.search)
    };
    render(){
        return(
                <nav>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                <ul class="navbar-nav ml-lg-5">
                    <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                        <div class="dropdown-menu">
                            <Link  className="dropdown-item" onClick={() => this.choose("spicy")}>spicy</Link>
                            <Link  className="dropdown-item" onClick={() => this.choose("sweet")}>sweet</Link>
                            <Link  className="dropdown-item" onClick={() => this.choose("sour")}>sour</Link>
                            <Link  className="dropdown-item" onClick={() => this.choose("salty")}>salty</Link>
                        </div>
                        <div class="input-group-append">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Halal Status</button>
                        <div class="dropdown-menu">
                            <Link  className="dropdown-item" onClick={() => this.choose2("true")}>Halal</Link>
                            <Link  className="dropdown-item" onClick={() => this.choose2("false")}>Haram</Link>
                        </div>
                    <div class="input-group-append">
                        <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"  name="search" onChange={e=>this.changeInput(e)}/></div>
                    </div>
                </div>
                </ul>
                </div>
            </nav>
            </nav>
        );
    }
}

export default connect("category_taste", actions)(withRouter(Search));