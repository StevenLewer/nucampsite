import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
        renderCampsite(campsite) {
            if (campsite) {
                return (
                    <div className="col-md-5 m-1">                        
                        <Card>
                            <CardImg top src={this.props.campsite.image} alt={this.props.campsite.name} />
                            <CardBody>
                                <CardTitle>{this.props.campsite.name}</CardTitle>
                                <CardText>{this.props.campsite.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                );
            }
            return <div />
        }
        renderComments(comments) {
            if (comments) {
                return (
                    <div className="col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments.map(comment => {
                            return(
                                <div key={comment.id}>
                                    <p>{comment.text}<br />
                                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            }
            return <div />
        }
        render() {
            if (this.props.campsite) {
                return (
                    <div className="container">
                        <div className="row">
                            {this.renderCampsite(this.props.campsite)}
                            {this.renderComments(this.props.campsite.comments)}
                        </div>
                    </div>
                );
            }
            return <div />;
        }
    }

export default CampsiteInfo;