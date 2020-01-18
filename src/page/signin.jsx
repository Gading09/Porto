import React from 'react';
import {store,actions} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'

class SignIn extends React.Component{
    changeInput = e => {
        console.warn("cek event target", e.target.name ,e.target.value);
        store.setState({ [e.target.name]: e.target.value });
      };
    SignIn = async () => {
        console.log("aku ambil token")
        await this.props.getSignIn()
        console.log("aku coba USER")
        await this.props.getProfileUser()
        console.log("aku coba Agent")
        await this.props.getProfileAgent()
        console.log("aku coba Seller")
        await this.props.getProfileSeller()
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
                        <div className="col-sm-12">
                            <button type="submit" onClick={() => this.SignIn()} data-dismiss="modal" className="btn btn-primary btn-block">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default connect('is_login',actions
)(withRouter(SignIn))