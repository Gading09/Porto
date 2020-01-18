import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../page/home';
import NotMatch from '../page/noMatch';
import ComingSoon from '../page/comingSoon';
import Store from '../page/store';
import Profile from '../page/profile';
import ManyProduct from '../page/manyProduct';
import addProduct from '../page/addProduct';
import DetailProduct from '../page/detailProduct';
import Checkout from '../page/checkout'
import Cart from '../page/cart';
import listAllProduct from '../component/listAllProduct';
import ThankYou from '../page/thankYou';

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/store" component={Store} />
                <Route exact path="/detailproduct/:id_product" component={DetailProduct} />
                <Route exact path="/blank" component={ComingSoon} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/listproduct" component={ManyProduct} />
                <Route exact path="/addproduct" component={addProduct} />
                <Route exact path="/listproduct/:category" component={ManyProduct} />
                <Route exact path="/listproduct/:search" component={ManyProduct} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/finish" component={ThankYou} />
                <Route component ={NotMatch}/>
            </Switch>
        </BrowserRouter>
    )
}
export default MainRoute;