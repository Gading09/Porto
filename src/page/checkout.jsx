//import plugin
import React from 'react';
import { Link } from "react-router-dom";

//import style
import "../style/nomatch.css"
import Navbar from "../component/navbar"
import "../style/home.css"
import {store,actions} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'

class checkout extends React.Component{
    state = {
        tampil : false
    }
    changeInput = e => {
        console.warn("cek event target", e.target.name ,e.target.value);
        store.setState({ [e.target.name]: e.target.value });  
    };
    Apply = async () => {
        await this.props.AddTransaction(this.props.checkout_Peyment)
        await this.props.ShowTransaction()
        console.log("param",this.props.checkout_Peyment);
        if(this.props.checkout_Email === undefined){
            alert("Masukkan Email !!!")
        }
        else if(this.props.checkout_HP === undefined){
            alert("Masukkan Nomor Telepon !!!")
        }
        else if(this.props.checkout_Alamat === undefined){
            alert("Masukkan Nomor Telepon !!!")
        }
        else if(this.props.checkout_Peyment === undefined ){
            alert("Masukkan Metode Pembayaran !!!")          
        }
        else{
            this.setState({
                tampil:true
            }) 
        }
      }
      deleteCart = async() => {
        this.props.clearCart()
      }
    render(){
        return(
            <nav>
                <Navbar/>
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
                                            <Link to="/cart" class="nav-link" style={{fontSize:"35px"}}>Cart</Link>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link" style={{fontSize:"35px",fontWeight:"100"}}>&#62;</p>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/checkout" class="nav-link" style={{color:"#9ACD32", fontSize:"35px"}}>Checkout</Link>
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
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form onSubmit={e=> e.preventDefault(e)}>
                                    <div className="col-md-12">
                                        <h2 className="titlecart"> Informasi Pelanggan</h2>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group row">
                                            <label for="inputEmail3" className="col-sm-4 col-form-label">Email <span className="star">*</span></label>
                                            <div className="col-sm-8">
                                            <input type="text" name='checkout_Email' onChange={e=>this.changeInput(e)} className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group row">
                                            <label for="inputEmail3" className="col-sm-4 col-form-label">Telepon / HP <span className="star">*</span></label>
                                            <div className="col-sm-8">
                                            <input type="text" name='checkout_HP' onChange={e=>this.changeInput(e)} className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group row">
                                            <label for="inputEmail3" className="col-sm-4 col-form-label">Alamat <span className="star">*</span></label>
                                            <div className="col-sm-8">
                                            <input type="textarea" name='checkout_Alamat' onChange={e=>this.changeInput(e)} className="form-control" id="inputEmail3"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                            <form onSubmit={e=> e.preventDefault(e)}>
                                    <div className="col-md-12">
                                        <h2 className="titlecart"> Informasi Lainnya</h2>
                                    </div>
                                    <div className="col-md-12">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect01">Payment <span className="star">*</span></label>
                                            </div>
                                            <select class="custom-select" id="inputGroupSelect01" name='checkout_Peyment' onChange={e=>this.changeInput(e)}>
                                                <option selected disabled>Choose...</option>
                                                <option value="OVO">OVO</option>
                                                <option value="GoPay">GoPay</option>
                                                <option value="LinkAja">LinkAJa</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                                <button type="submit" onClick={() => this.Apply()} className="btn btn-primary btn-block">Apply</button>
                                {this.state.tampil ? 
                                    (<div className="checkout_price">
                                    <p>Total Harga : Rp {this.props.transaksi.total_price}</p>
                                    <p>+ Ongkos Kirim : Rp {this.props.transaksi.shipping}</p>
                                    <p>Total Pembayaran : Rp {this.props.transaksi.paid_price}</p>
                                </div>):(<div></div>) }
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{borderTop:"1px solid black",marginTop:"30px",marginBottom:"50px"}}></div>
                            <div>
                                <Link to="/listproduct"><button type="submit" className="btn btn-primary" style={{float:"left",marginLeft:"40px",paddingLeft:"30px",paddingRight:"30px"}}>Continue Shopping</button></Link>
                                <Link to="/finish"><button type="submit" className="btn btn-success" style={{float:"right",marginRight:"40px",paddingLeft:"30px",paddingRight:"30px"}} onClick={this.deleteCart}>Pay</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

//mengeksport class NotMatch ke main-route.js
export default connect('checkout_Email,checkout_HP,checkout_Alamat,checkout_Peyment,transaksi',actions
)(withRouter(checkout))
