//import plugin
import React from 'react';
import { Link } from "react-router-dom";
import {store,actions} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'

//import style
import "../style/nomatch.css"
import Navbar from '../component/navbar';
import Category from '../component/navbarCategory'
import Header from '../component/header';
import '../style/detailProduct.css'
import axios from 'axios';

// untuk mengembalikan respon saat tidak ditemukan page yang sesuai
class DetailProduct extends React.Component{
    RequestDetailProduct = async () => {
        const id_product = this.props.match.params.id_product;
        await axios
            .get(`http://0.0.0.0:5000/public/product/${id_product}`)
            .then(function(response){
                console.log("ini respon datanya",response.data)
                store.setState({
                    product: response.data,
                    data_seller: response.data.id_seller,
                    // apa : response.data.product.data_seller,
                    isLoading: false
                })
            })
            .catch(function(error){
                store.setState({isLoading:false});
            })
    }
    componentDidMount = async () => {
        await this.RequestDetailProduct()
    }
    render(){
        // const seller_id = this.props.product.data_seller   
        // const username = {seller_id}.username        
        console.log("Data Hasil Nembak : ", this.props.product)
        console.log("Data seller Hasil Nembak : ", this.props.data_seller)
        return(
            <nav>
                <Navbar/>
                <Header/>
                <div className="container-fluid detail-product">
                    <div className="row">
                        <div className="col-md-12 detail-direct">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{paddingTop:"0",paddingLeft:"0",paddingBottom:"0",paddingRight:"0"}}>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent2" style={{backgroundColor:"white",paddingLeft:"55px"}}>
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item">
                                            <Link to="/" class="nav-link" style={{color:"#9ACD32"}}>Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link">&#62;</p>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/store" class="nav-link" style={{color:"#9ACD32"}}>Store</Link>                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link">&#62;</p>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link">{this.props.product.name_product}</p>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-6 detail-gambar">
                            <img src={this.props.product.image} alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h3>{this.props.product.name_product}, {this.props.product.weight} gr</h3>
                                    <h3>Rp. {this.props.product.price}</h3>
                                    <p>Stock : {this.props.product.stock}</p>
                                    <div style={{marginTop:"25px"}}>
                                        <p> <span className="font_detailProduct">Seller's Username :</span>{this.props.data_seller.username}</p>
                                        <p><span className="font_detailProduct">Product Description :</span></p>
                                        <p className="deskripsinya">" {this.props.product.description} "</p>
                                        <p><span className="font_detailProduct">Reference :</span> {this.props.product.reference}</p>
                                        {this.props.product.halal? <p><span className="font_detailProduct">Halal Status :</span> Halal</p>:<p><span className="font_detailProduct">Halal Status : </span>Haram</p>}
                                        <p><span className="font_detailProduct">Taste Category :</span>{this.props.product.taste}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

//mengeksport class NotMatch ke main-route.js
export default connect('product, data_seller', actions
)(withRouter(DetailProduct));