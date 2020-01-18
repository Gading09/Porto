import React from 'react';
import axios from 'axios'
import {store,actions} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import Navbar from '../component/navbar';

class AddProduct extends React.Component{
    changeInput = e => {
        console.warn("cek event target", e.target.name ,e.target.value);
        store.setState({ [e.target.name]: e.target.value });
      };
    AddProductSeller = async () => {
        await this.props.AddProduct()
        alert("product successfully added !")
        this.props.history.push('/')
    }
    render(){
        return(
            <React.Fragment>
            <Navbar/>
            <div className='container' style={{marginTop:"20px"}}>
                <form onSubmit={e=> e.preventDefault(e)}>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-4 col-form-label">Nama Product <span className="star">*</span></label>
                        <div className="col-sm-8">
                        <input type="text" name='nama_product' onChange={e=>this.changeInput(e)} className="form-control" id="inputEmail3" required/>
                        </div>
                    </div>
                    <div className="form-group row"> 
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Description <span className="star">*</span></label>
                        <div className="col-sm-8">
                        <input type="text" name='description' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Weight <span className="star">*</span></label>
                        <div className="col-sm-8">
                        <input type="text" name='weight' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Price <span className="star">*</span></label>
                        <div className="col-sm-8">
                        <input type="text" name='price' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Reference <span className="star">*</span></label>
                        <div className="col-sm-8">
                        <input type="text" name='reference' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Stock <span className="star">*</span></label>
                        <div className="col-sm-8">
                        <input type="text" name='stock' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Halal <span className="star">*</span></label>
                        <div className="col-sm-8">
                        <input type="text" name='halal' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Taste <span className="star">*</span></label>
                        <div className="col-sm-8">
                        <input type="text" name='taste' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Image <span className="star">*</span></label>
                        <div className="col-sm-8">
                        <input type="text" name='image' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">   
                        <div className="col-sm-12">
                        <button type="submit" onClick={() => this.AddProductSeller()} className="btn btn-primary btn-block">Add Product</button>                        
                        </div>
                    </div>
                </form>
            </div>
            </React.Fragment>
        )
    }
}
export default connect('',actions
)(withRouter(AddProduct))