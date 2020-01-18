//import plugin
import React from 'react';
import { Link } from "react-router-dom";
import {store,actions} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'

//import style
import "../style/cart.css"
import Navbar from '../component/navbar';
import Category from '../component/navbarCategory'
import Search from '../component/search';
import CartFromSeller from '../component/cartFromSeller';

// untuk mengembalikan respon saat tidak ditemukan page yang sesuai
class Cart extends React.Component{
    state = {
        cartDetail: []
    }
    componentDidMount = async () => {
        console.log("Didmount CART")
        await this.coba1()
        // await this.coba2()
    }
    coba1 = async() => {
        await this.props.GetCart()
        const res = this.props.cart
        console.warn('rereres', res);
        
        const res2 = []
        for(const i in res){
            console.warn('res id', res[i].id);
            await this.coba2(res[i].id)
            const cartRes = await this.props.cartdetail
            
            console.warn('ini cartres ', i, ' ', cartRes);
            res2.push(cartRes)         
        }
        console.warn('res2', res2);
        await store.setState({ cartProduct: res2 })
    }

    coba2 = async(id) => {
        
        await this.props.GetCartDetail(id)
        console.log("sudah axios ",this.props.cartId)
    }
    deleteCart = async () => {
        await this.props.clearCart()
    }
    render(){
        console.log("Tolong ",this.props.cart)
        console.log("cartProduct ",this.props.cartProduct)
        const ListCarts = this.props.cartProduct.map((carts,key) => {
            const cart = this.props.cart
            console.log("Cart di LOOPING", carts)
            return(
                <CartFromSeller
                key={key}
                cartDetail = {this.state.cartDetail}
                ProdukApa = {carts}
                price_cart={this.props.cart.price_cart}
                />
            );
        });
        
        return(
            <nav>
                <Navbar/>
                {/* <Search/> */}
                <div className="container-fluid cart-product">
                    <div className="row">
                        <div className="col-md-12 cart-direct">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{paddingTop:"0",paddingLeft:"0",paddingBottom:"0",paddingRight:"0"}}>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent2" style={{backgroundColor:"white",paddingLeft:"64%"}}>
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item">
                                            <Link to="/cart" class="nav-link" style={{color:"#9ACD32", fontSize:"35px"}}>Cart</Link>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link" style={{fontSize:"35px",fontWeight:"100"}}>&#62;</p>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/checkout" class="nav-link" style={{fontSize:"35px"}}>Checkout</Link>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link" style={{fontSize:"35px",fontWeight:"100"}}>&#62;</p>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link" style={{fontSize:"35px"}}>Finish</p>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-12">
                            <h2 className="titlecart"> Shopping Cart Summary</h2>
                            {ListCarts}
                        </div>
                        <div className="col-md-12 total_harga">
                            <p>Total Harga : Rp </p>
                        </div>
                        <div className="col-md-12 checkout_cart">
                            <Link className="header-buttonn3" to="/listproduct"><button type="button" class="btn btn-danger" style={{float:"left",marginLeft:"40px",paddingLeft:"30px",paddingRight:"30px"}}>Continue Shopping</button></Link>
                            <Link className="header-buttonn3" to="/checkout"><button type="button" class="btn btn-primary " style={{float:"right",marginRight:"40px",paddingLeft:"30px",paddingRight:"30px"}}>Checkout</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

//mengeksport class NotMatch ke main-route.js
export default connect('cart, cartdetail,cartDetail,cartProduct', actions
)(withRouter(Cart));