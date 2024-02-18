import React from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteProduct } from '../actions/Action';
import { connect } from 'react-redux';

const BoardList = ({ products, deleteProduct }) => {


  const handleDelete = (id) => {
    if(window.confirm("정말 삭제하시겠습니까?")){
    deleteProduct(id);}
  };

  return (
    <div>
      <Form.Group>
        <h1>Read Products</h1>
        <Link to="/form">
          <Button style={{ marginTop: '2%' }}>Create product</Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Desription</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
       
            {
            products.map((list) => {
              return(
              <tr key={list.id}>
                <td>{list.name}</td>
                <td>{list.description}</td>
                <td>{list.price}</td>
                <td>{list.category}</td>
                <td>
                  <Button>Read</Button>
                  <Link to={`/form/?id=${list.id}`}>
                    <Button>Edit</Button>
                  </Link>
                  <Button onClick={() => handleDelete(list.id)}>Delete</Button>
                </td>
              </tr>)}
            )}
          </tbody>
        </Table>
      </Form.Group>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { deleteProduct })(BoardList);