import React, {Component} from 'react';
// import "../style/css-final.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Search from './search';
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import "../style/shop.css"
import axios from 'axios';

class ListAllProduct extends Component{
    addcart = async () => {
       await this.props.addToCart()
       alert("Add Cart succsess!")
    }

    render(){
        return(
        <div className="col-md-3 product">
            <div class="card perlu">
                <div class="card-body">
                    <Link to={`/detailproduct/${this.props.id_produk1}`}>
                        <img className="image-product" src={this.props.gambar_produk1} alt=""/>
                    </Link>
                    <p className="name-product">{this.props.nama_produk1}</p>
                    <p className="title-rating">Rate</p>
                    <p className="weight-product">{this.props.berat_produk1} gr</p>
                    <p className="rating-product">({this.props.rating_produk1}/10)</p>
                    <p className="seller-product">Hedy</p>
                    <p className="stock">stock: </p>
                    <p className="stock-product">{this.props.stock_produk1}</p>
                    <div>
                        <p className="price">Rp. {this.props.harga_produk1} /</p>
                        <p className="reference">{this.props.bungkus_produk1}</p>
                    </div>
                    {/* <img className="halal" src={require("../image/halal.png")} alt=""/> */}
                    {this.props.halal ?
                        (<img className="halal" src={require("../image/miee.jpeg")} alt=""/>):(<img className="nohalal" src={require("../image/nohalal.png")} alt=""/>)
                    }
                    <button type="button" class="btn btn-primary add-to-cart" onClick={this.addcart}>Add to cart</button>
                </div>
            </div>
        </div>
        );
    }
}

export default connect("", actions)(withRouter(ListAllProduct));