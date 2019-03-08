import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';
const Dishdetail = ({dish}) => {
  
            return(
               dish !== null && dish !== undefined ?
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
                :
                <div></div>
            );
    }

export default Dishdetail;