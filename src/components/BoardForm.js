
import { addProduct, updateProduct } from "../actions/Action";
import React, { useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import { Button, Form, Table } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";


const BoardForm = ({products,addProduct, updateProduct}) =>{
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = Number(params.get("id"));
    const [content,setContent] = useState("");
    const navigate = useNavigate();
    

    const getContent = () => {
        if (id !== 0) {
          let product = products.find(product => product.id === id);
          setContent(product);
        }
      };
      
      useEffect(() => {
        getContent();
      }, [id, products]); // id나 products가 변경될 때마다 getContent 실행
      
      useEffect(() => {
        if (content) {
          nameRef.current.value = content.name;
          descriptionRef.current.value = content.description;
          priceRef.current.value = content.price;
          categoryRef.current.value = content.category;
        }
      }, [content]); 


    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();

    const saveForm = ()=>{
        addProduct({
            id: new Date().getTime(),
            name:nameRef.current.value,
            description:descriptionRef.current.value,
            price:priceRef.current.value, 
            category:categoryRef.current.value})
            navigate("/");
    }
    const updateForm = ()=>{
        updateProduct({
            id: content.id,
            name:nameRef.current.value,
            description:descriptionRef.current.value,
            price:priceRef.current.value, 
            category:categoryRef.current.value});
            navigate("/");
    }

    return(
        <div>
            <h1>{id === 0 ? "Create product":"Update product"}</h1>
            <br/>
            <Link to="/"><Button>Read Products</Button></Link>
            <Table  striped bordered hover>
                <thead></thead>
                <tbody>
                <tr>
                    <th>Name</th>
                    <td>
                        <Form.Control
                        type="text"
                        ref={nameRef}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Desription</th>
                    <td>
                        <Form.Control
                        type="text"
                        ref={descriptionRef}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>
                        <Form.Control
                        type="text"
                        ref={priceRef}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Category</th>
                    <td>
                    <Form.Select aria-label="Default select example"  ref={categoryRef}>
      <option>Select category...</option>
      <option value="Electronics">Electronics</option>
      <option value="Clothing">Clothing</option>
      <option value="Food">Food</option>
    </Form.Select>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th/>
                    <td>
                       {id === 0? <Button onClick={()=>saveForm()}>Save</Button>:<Button onClick={()=>updateForm()}>Update</Button>}
                    </td>
                </tr>
                </tfoot>
            </Table>
        </div>
    )
}
const mapStateToProps = (state) => ({
    products: state.products,
  });

export default connect(mapStateToProps,{addProduct,updateProduct})(BoardForm);