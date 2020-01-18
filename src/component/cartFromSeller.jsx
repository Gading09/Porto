import React, {Component} from 'react';
// import "../style/css-final.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Search from './search';
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import "../style/cartFromSeller.css"
import axios from 'axios';
import CartFromProduct from './cartFromProduct';

class CartFromSeller extends Component{
    render(){               
        const ProductCart = this.props.ProdukApa.map((pro,key) => {
            const cart = this.props.cart
            console.log("ProductCartAPA",this.props.ProdukApa)
            
            return(
                <CartFromProduct
                key={key}
                name_product_cart={pro.id_product.name_product}
                stock_cart={pro.id_product.stock}
                weight_cart={pro.id_product.weight}
                price_cart={pro.id_product.price}
                reference_cart={pro.id_product.reference}
                halal_cart={pro.id_product.halal}
                image_cart={pro.id_product.image}
                id_user_cart={pro.id_product.id_user}
                id_seller_cart={pro.id_product.id_seller}
                />
            );
        });

        return(
            <React.Fragment>
                <h2 className="numbercart">Cart 1{this.props.key}</h2>
                <div className="FromSeller">
                    {ProductCart}
                    <h3>{this.props.cart.price_cart}</h3>
                </div>
            </React.Fragment>
        );
    }
}

export default connect('cart, cartdetail,cartDetail,cartProduct', actions
)(withRouter(CartFromSeller));