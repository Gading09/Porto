import React, {Component} from 'react';
import "../style/bootstrap.min.css";
import "../style/header.css"
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <nav>
                <div className="container-fluid">
                    <div className="row header-image">
                        <img src={require("../image/mie.jpg")} alt=""/>
                        <p className="header-emie-logo">E-mie</p>
                        <p className="header-emie-text">Pangan Yang Lebih Sehat dan Murah, Untuk Kita Semua.
                            Produk Lokal, Organik dan Fresh</p>
                        <Link className="header-buttonn3" to="/store"><button type="button" class="btn btn-primary btn-lg">Mulai Belanja!</button></Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;