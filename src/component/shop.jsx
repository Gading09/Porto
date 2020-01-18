import React, {Component} from 'react';
// import "../style/css-final.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Search from './search';
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import "../style/shop.css"

class Shop extends Component{
    addcart = async() =>{
        await this.props.addToCart(this.props.id_produk)
        alert("Add Cart succsess!")
    }
    render(){
        return(
            <React.Fragment>
                <div className="col-md-3 product">
                    <Link to={`/detailproduct/${this.props.id_produk}`}>
                        <img className="image-product" src={this.props.gambar_produk} alt=""/>
                    </Link>
                    <p className="name-product">{this.props.nama_produk}</p>
                    <p className="title-rating">Rate</p>
                    <p className="weight-product">{this.props.berat_produk} gr</p>
                    <p className="rating-product">({this.props.rating_produk}/10)</p>
                    <p className="seller-product">Hedy</p>
                    <p className="stock">stock: </p>
                    <p className="stock-product">{this.props.stock_produk}</p>
                    <div>
                        <p className="price">Rp. {this.props.harga_produk} /</p>
                        <p className="reference">{this.props.bungkus_produk}</p>
                    </div>
                    {/* <img className="halal" src={require("../image/halal.png")} alt=""/> */}
                    {this.props.halal ?
                        (<img className="halal" src={require("../image/miee.jpeg")} alt=""/>):(<img className="nohalal" src={require("../image/nohalal.png")} alt=""/>)
                    }
                    <button type="button" class="btn btn-primary add-to-cart" onClick={this.addcart}>Add to cart</button>
                </div>
            </React.Fragment>
        );
    }
}

export default connect("", actions)(withRouter(Shop));