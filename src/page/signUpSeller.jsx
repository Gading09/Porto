import React from 'react';
import axios from 'axios'
import {store,actions} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'

class SignUpSeller extends React.Component{
    changeInput = e => {
        console.warn("cek event target", e.target.name ,e.target.value);
        console.warn('status login', store.is_login)
        store.setState({ [e.target.name]: e.target.value });
      };

    handleRegisterSeller = async() => {
        console.log("aku di sini WOOI")
        await this.props.postSignUp3()
        console.log("aku lagi login")
        await this.props.getSignIn()
        const token = localStorage.getItem("token")
        await this.props.getProfileSeller(token)
        alert("Sign Up Successful !")
        this.props.history.push('/')
    }

    render(){
        return(
            <div className='container'>
                <form onSubmit={e=> e.preventDefault(e)}>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-4 col-form-label">Username</label>
                        <div className="col-sm-8">
                        <input type="text" name='userNameInput' onChange={e=>this.changeInput(e)} className="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="form-group row"> 
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Password</label>
                        <div className="col-sm-8">
                        <input type="text" name='userPasswordInput' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Shop Name</label>
                        <div className="col-sm-8">
                        <input type="text" name='userShop' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Fullname</label>
                        <div className="col-sm-8">
                        <input type="text" name='UserFullName' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                        <input type="text" name='userEmail' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Address</label>
                        <div className="col-sm-8">
                        <input type="text" name='userAddress' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Phone Number</label>
                        <div className="col-sm-8">
                        <input type="text" name='userPhone' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <button type="submit" onClick={() => this.handleRegisterSeller()} data-dismiss="modal" className="btn btn-primary btn-block">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default connect('',actions
)(withRouter(SignUpSeller))