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
import Search from '../component/search';
import ListAllProduct from '../component/listAllProduct'

// untuk mengembalikan respon saat tidak ditemukan page yang sesuai
class ManyProduct extends React.Component{
    componentDidMount = async () => {
        console.warn("saya ada di sini kakak")
        const category_id = this.props.match.params.category;
        if (category_id === undefined){
            await this.props.RequestDataAllProduct()
        }
        else{
            await this.props.category()
        }
    }
    render(){
        console.log("ini di render")
        // const category_id = this.props.match.params.category;
        // if (category_id === undefined){
        //     console.log("aku gk kategori");
            
        // }
        // else{
        //     console.log("aku kategory");
        //     this.props.category()
        // }
        // const listProduct1 = this.props.listProduct1;
        // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",listProduct1)
        // const TopProduct1 = listProduct1.filter(item1 => {
        //     if (item1.name_product1 !== null && item1.image !== null){
        //         console.log("aku true")
        //         return item1;
        //     }
        //     return false;
        // });

        const ListProduk1 = this.props.listProduct1.map((item1) => {
            return(
                <ListAllProduct
                id_produk1={item1.id}
                nama_produk1={item1.name_product}
                deskripsi_produk1={item1.description}
                rating_produk1={item1.rating}
                berat_produk1={item1.weight}
                harga_produk1={item1.price}
                bungkus_produk1={item1.reference}
                stock_produk1={item1.stock}
                halal_produk1={item1.halal}
                gambar_produk1={item1.image}
                />
            );
        });
        return(
            <nav>
                <Navbar/>
                <Search/>
                <div className="container-fluid">
                    <div className="row">
                        {ListProduk1}
                    </div>
                </div>
            </nav>
        )
    }
}

//mengeksport class NotMatch ke main-route.js
export default connect('listProduct1,category_taste', actions
)(withRouter(ManyProduct));