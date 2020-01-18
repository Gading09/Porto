//import plugin
import React from 'react';
import { Link } from "react-router-dom";
import {store,actions} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'

//import style
import "../style/nomatch.css"
import Colousel from '../component/corousel';
import Navbar from '../component/navbar';
import Category from '../component/navbarCategory'
import Shop from '../component/shop';
import SemiNavbar from '../component/semiNavbar';

// untuk mengembalikan respon saat tidak ditemukan page yang sesuai
class Store extends React.Component{
    componentDidMount = async () => {
        console.warn("saya ada di sini kakak")
        await this.coba()
    }
    coba = async() => {
        await this.props.RequestDataProduct()
    }
    render(){
        console.log("ini di render")
        const listProduct = this.props.listProduct;
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",listProduct)
        const TopProduct = listProduct.filter(item => {
            if (item.name_product !== null && item.image !== null){
                console.log("aku true")
                return item;
            }
            return false;
        });

        const ListProduk = TopProduct.map((item) => {
            return(
                <Shop
                id_produk={item.id}
                nama_produk={item.name_product}
                deskripsi_produk={item.description}
                rating_produk={item.rating}
                berat_produk={item.weight}
                harga_produk={item.price}
                bungkus_produk={item.reference}
                stock_produk={item.stock}
                halal_produk={item.halal}
                gambar_produk={item.image}
                />
            );
        });
        return(
            <nav>
                <Navbar/>
                <Colousel/>
                <SemiNavbar/>
                {/* <Shop/> */}
                <div className="container-fluid">
                    <div className="row">
                        {ListProduk}
                    </div>
                </div>
            </nav>
        )
    }
}

//mengeksport class NotMatch ke main-route.js
export default connect('listProduct', actions
)(withRouter(Store));