import React, {Component} from 'react';
// import "../style/css-final.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Search from './search';
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import "../style/FromProduct.css"
import axios from 'axios';

class CartFromProduct extends Component{
    render(){
        console.log("PRODUCT di LOOPING")
        return(
            <React.Fragment>
                <div className="row slide-product">
                    <div className="col-md-3 fromproduct">
                        <img className="image-product" src={this.props.image_cart} alt=""/>
                    </div>
                    <div className="col-md-6 body_Cart">
                        <p className="name-product">{this.props.name_product_cart}</p>
                        <p className="stock">stock: {this.props.stock_cart}</p>
                        {this.props.halal_cart ?
                            (<p className="halal-product">Halal</p>):(<p className="halal-product">Tidak Halal</p>)
                        }
                        <p className="weight-product">{this.props.weight_cart} gr / <span>{this.props.reference_cart}</span></p>
                        <p className="price">Rp. {this.props.price_cart} </p>
                    </div>
                    <div className="col-md-3 klikan">
                        <button type="button" class="btn btn-primary add1" onClick={this.addToCart}>Add</button>
                        <button type="button" class="btn btn-danger add2" onClick={this.addToCart}>Remove</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CartFromProduct;