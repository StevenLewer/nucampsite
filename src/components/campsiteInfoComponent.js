import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
        render(){
            if(this.props.campsite){
                return (
                    <div className="container">                    
                        <div className="row">
                            <div className="col-md-5 m-1">                        
                            <Card>
                                <CardImg top src={this.props.campsite.image} alt={this.props.campsite.name} />
                                <CardBody>
                                    <CardTitle>{this.props.campsite.name}</CardTitle>
                                    <CardText>{this.props.campsite.description}</CardText>
                                </CardBody>
                            </Card>
                            </div>

                            <div className="col-md-5 m-1">                        
                            <Card>
                                <CardBody>
                                <CardTitle> Site Details </CardTitle> 
                                <CardText>{this.props.campsite.comments.map(x=>{
                                    return(
                                        <div key={x.id}>
                                            <div>
                                                Rating: {x.rating}
                                            </div>
                                            <div>
                                                text: {x.text}
                                            </div>
                                            <div>
                                                author: {x.author}
                                            </div>
                                            <div>
                                                date: {x.date}
                                            </div>
                                            <hr/>
                                        </div>
                                    )
                                })}</CardText>
                                </CardBody>
                            </Card>
                            </div>
                        </div>
                    </div>
                );
            }
            else{
                return <div/>
            }

        }
}


export default CampsiteInfo;