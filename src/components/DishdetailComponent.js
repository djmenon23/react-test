import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
  Button, Modal, ModalBody, ModalHeader, Row, Label, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';
const RenderDish = ({ dish }) => {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
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

const RenderComments = ({ comments, addComment, dishId }) => {
  return (
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

      <CommentForm />
    </div>
  );
}
const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)
class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleSubmit(val) {
    console.log(val);
    this.toggle()
  }
  

  render() {
    return (
      <div>
        <Button onClick={this.toggle} color="success">Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)} name="myForm">
              <Row className="form-group" >
              <Label htmlFor="rating" md={2}>Rate</Label>
              <Col md={10}>
                <Control.select id="rating" model=".rating" name="rating" 
                className="form-control"
                validators={{required}}
                >
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Control.select>
                <Errors 
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                                required: 'Required ',
                            }}
                            />
                </Col>
              </Row>
              <Row className="form-group">
                            <Label htmlFor="name" md={2}>
                                Name
                            </Label>
                            <Col md={10}>
                            <Control.text model=".name" id="name" 
                            name="name"
                            className="form-control"
                            validators={{
                                required,minLength: minLength(3),
                                maxLength: maxLength(15)
                            }}
                            />
                            <Errors 
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                                required: 'Required ',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 chars or less'
                            }}
                            />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={2}>
                                Comment
                            </Label>
                            <Col md={10}>
                            <Control.textarea model=".comment" id="comment" 
                            name="comment"
                            className="form-control"
                            validators={{
                                required,minLength: minLength(3),
                                maxLength: maxLength(15)
                            }}
                            />
                            <Errors 
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                                required: 'Required ',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 chars or less'
                            }}
                            />
                            </Col>
                        </Row>
                        <Button color="primary" type="submit">Submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const Dishdetail = ({ dish, comments, addComment }) => {

  return (
    dish !== null && dish !== undefined ?
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <Link to="">{dish.name}</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="row">

          <RenderDish dish={dish}></RenderDish>
          <RenderComments comments={comments}
            addComment={addComment}
            dishId={dish.id}
          ></RenderComments>
        </div>
      </div>
      :
      <div></div>
  );
}

export default Dishdetail;