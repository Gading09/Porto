import React, {Component} from 'react';
import "../style/bootstrap.min.css";
import "../style/reviewHome.css"
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
// import { Link } from "react-router-dom";

class ReviewHome extends Component{
    componentDidMount = async() => {
        await this.props.Review()
    }
    render(){
        return(
            <nav>
                <div className="container-fluid">
                    <div className="row review">
                        <div className="col-md-6 review-image1">
                            <p className="review-user">Pelanggan Puas</p>
                            <hr/>
                            <img className="img-review" src={this.props.image_user} alt=""/>
                            <div className="congcong">
                                <p className="user-name">{this.props.name_user}</p>
                                <p className="review-messege">{this.props.review_user}</p>
                            </div>
                        </div>
                        <div className="col-md-6 review-image2">
                        <p className="review-user">Agen Gembira</p>
                            <hr/>
                            <img className="img-review" src={this.props.image_agent} alt=""/>
                            <div className="congcong">
                                <p className="user-name">{this.props.name_agent}</p>
                                <p className="review-messege">{this.props.review_agent}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect("image_user,name_user,rating_user,review_user,image_agent,name_agent,rating_agent,review_agent", actions)(withRouter(ReviewHome));