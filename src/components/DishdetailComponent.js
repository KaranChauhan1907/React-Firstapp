import React from "react"
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends React.Component{
    renderDish(dish){
        return(
        <div className="col-12 col-md-5 ">
            <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
            </Card> 
        </div>
        )
    }
    renderComments(comments){
       if (comments != null){
           const CommentListItem = comments.map((comment)=>{
               return(
                   <li key = {comment.id}>
                       <p>{comment.comment}</p>
                        <p>--{comment.author}{comment.date}</p>
                   </li>
               )
           })
           return(
               <div className="col-12 col-md-5 m-1">
                   <h4>Comments</h4>
                   <ul className="list-unstyled">
                        {CommentListItem}
                   </ul>
               </div>
           )
       }
       else{
           return(
               <div></div>
           )
       }
    }

    render(){
        if(this.props.dish !=null){
            return(
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            )  
        }
        else{
            return (
                <div></div>
            )
        }
    }

}

export default DishDetail;