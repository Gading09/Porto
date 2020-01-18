import React from 'react';
import axios from 'axios'
import {store,actions} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'

class SignUp extends React.Component{
    constructor() {
        super();
    
        this.state = {
          role: 'user'
        };
    
        this.onRadioChange = this.onRadioChange.bind(this);
      }
    
      onRadioChange = (e) => {
        this.setState({
          role: e.target.value
        });
      }

    changeInput = e => {
        console.warn("cek event target", e.target.name ,e.target.value);
        console.warn('status login', store.is_login)
        store.setState({ [e.target.name]: e.target.value });
      };
    handleRegisterUser = async () => {
        console.log(this.state.role);
        await this.props.postSignUp1()
        await this.props.getSignIn()
        const token = localStorage.getItem("token")
        await this.props.getProfileUser(token)
        this.props.history.push('/')
    }

    handleRegisterAgent = async () => {
        await this.props.postSignUp2()
        await this.props.getSignIn()
        const token = localStorage.getItem("token")
        await this.props.getProfileAgent(token)
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
                        <input type="text" name='userNameInput' onChange={e=>this.changeInput(e)} className="form-control" id="inputEmail3" required/>
                        </div>
                    </div>
                    <div className="form-group row"> 
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Password</label>
                        <div className="col-sm-8">
                        <input type="text" name='userPasswordInput' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Fullname</label>
                        <div className="col-sm-8">
                        <input type="text" name='UserFullName' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                        <input type="text" name='userEmail' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Address</label>
                        <div className="col-sm-8">
                        <input type="text" name='userAddress' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">number phone</label>
                        <div className="col-sm-8">
                        <input type="text" name='userPhone' onChange={e=>this.changeInput(e)} className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sd-12">
                        <ul style={{marginTop:'10px'}}>
                            <li style={{display:"inline",marginLeft:'75px', marginTop:'2px'}}>
                            <label>
                                <input
                                type="radio"
                                value="user"
                                checked={this.state.role === "user"}
                                onChange={this.onRadioChange}
                                />
                                <span>Member</span>
                            </label>
                            </li>

                            <li style={{display:"inline",marginLeft:'75px'}}>
                            <label>
                                <input
                                type="radio"
                                value="agent"
                                checked={this.state.role === "agent"}
                                onChange={this.onRadioChange}
                                />
                                <span>Agent</span>
                            </label>
                            </li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                        {this.state.role == "user" ?
                        (<button type="submit" onClick={() => this.handleRegisterUser()} className="btn btn-primary btn-block" data-dismiss="modal">Sign UP</button>):
                        (<button type="submit" onClick={() => this.handleRegisterAgent()} className="btn btn-primary btn-block" data-dismiss="modal">Sign UP</button>)
                        }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default connect('',actions
)(withRouter(SignUp))