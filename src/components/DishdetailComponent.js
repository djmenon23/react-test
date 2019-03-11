import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


const RenderDish = ({dish}) => {
  return(  
  <div className="col-12 col-md-5 m-1">
    <Card>
       <CardImg top src={dish.image} alt={dish.name}/>
       <CardBody>
            <CardTitle>
                {dish.name}
                </CardTitle>
                <CardText>
                    {dish.description}
                </CardText>
        </CardBody> 
    </Card>
    </div>
  );
}

const RenderComments = ({comments}) => {
    return(  
    <div className="col-12 col-md-5 m-1">
    <h4>Comments</h4>
        <ul className="list-unstyled">
        {comments.map((comment) => {
            return (
                <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}</p>
                </li>
            )
        })}
        </ul>
      </div>
    );
  }

const Dishdetail = ({dish, comments}) => {
  
            return(
               dish !== null && dish !== undefined ?
               <div className="container">
                   <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                    <Link to={dish.id}>{dish.name}</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
               <div className="row">
             
                <RenderDish dish={dish}></RenderDish>
                <RenderComments comments={comments}></RenderComments>
                </div>
                </div>
                :
                <div></div>
            );
    }

export default Dishdetail;