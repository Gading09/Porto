//import plugin
import React from 'react';
import { Link } from "react-router-dom";

//import style
import "../style/nomatch.css"
import Navbar from "../component/navbar"
import Header from "../component/header"
import "../style/home.css"
import ReviewHome from '../component/reviewHome';
import ModalSeller from '../component/modalSeller'
import Footer from '../component/footer';

// untuk mengembalikan respon saat tidak ditemukan page yang sesuai
class Home extends React.Component{
    render(){
        return(
            <nav>
                <Navbar/>
                <Header/>
                <ModalSeller/>
                <div className="container home1">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 home-agent">
                            <p className="join-agent">Bergabung Menjadi Seller</p>
                            <hr/>
                            <img src={require("../image/seller.png")} alt=""/>
                            <p className="take-seller">Dapatkan penghasilan tambahan dan kembangkan konsumsi sehat di lingkungan Anda</p>
                            <button type="button" class="btn btn-primary header-buttonn1">
                                <a class="nav-link" data-toggle="modal" data-target="#exampleModalCenter2" type='button'>Bergabung menjadi seller sekarang!</a>
                            </button>
                        </div>
                    </div>
                </div>
                <ReviewHome/>
                <Footer/>
            </nav>
        )
    }
}

//mengeksport class NotMatch ke main-route.js
export default Home;