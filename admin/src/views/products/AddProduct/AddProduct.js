import React ,{useState} from 'react';
import {Form,Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import './add_admin.css';


const AddProduct=(props)=>{


    return (
  <div>

      
      
         <div>
       <Form method="post" className="form-container"> 

    <Form.Group controlId="formBasicImage" >
          <Form.Label>Upload Images</Form.Label>
       
       <Form.Control type="file"
         placeholder="Upload Images" accept="image/x-png,image/jpeg" autoComplete="off"/>
    </Form.Group>

    <Form.Group controlId="formBasicDescription">
        <Form.Label>Add Decsription</Form.Label>
        <textarea class="form-control" rows="5" id="comment" name="text"  placeholder="Add Product Description"></textarea>

    </Form.Group>

       <Form.Group controlId="formBasicSize">
         <Form.Label>
         Size Available</Form.Label><br/>
         <div class="form-check-inline">
         <label class="form-check-label" for="check1">
           <input type="checkbox" class="form-check-input" id="check1" name="Extra-small" value="something" />XS
         </label>
       </div>
       <div class="form-check-inline">
         <label class="form-check-label" for="check2">
           <input type="checkbox" class="form-check-input" id="check2" name="small" value="something"/>S
         </label>
       </div>
       <div class="form-check-inline">
         <label class="form-check-label">
           <input type="checkbox" class="form-check-input" id="check3" name="medium" value="something" />M
         </label>
       </div>
       <div class="form-check-inline">
         <label class="form-check-label" for="check2">
           <input type="checkbox" class="form-check-input" id="check4" name="large" value="something"/>L
         </label>
       </div>
       <div class="form-check-inline">
         <label class="form-check-label">
           <input type="checkbox" class="form-check-input" id="check5" name="extra large" value="something" />XL
         </label>
       </div>
       </Form.Group>
     
        <Form.Group controlId="formBasicPrice">
         <Form.Label>
         Price</Form.Label>
         <Form.Control type="number" min="50"  

         placeholder="₹" autoComplete="off" />
       </Form.Group>

       <Form.Group controlId="formBasicOffer">
       <Form.Label>
       Offer</Form.Label>
       <Form.Control type="number" min="0"  

       placeholder="Offer " autoComplete="off" />
     </Form.Group>

     <Form.Group controlId="formBasicPrice">
     <Form.Label>
     Discount</Form.Label>
     <Form.Control type="number" min="0"  

     placeholder="Discount" autoComplete="off" />
     </Form.Group>
     
     
     <Form.Group id="formBasicGuarantee">
     <Form.Label>
     Guarantee Period</Form.Label>
    <div class="input-group">
     
      <Form.Control type="number" min="0"  
     
       placeholder="Enter Days of gurrantee" autoComplete="off" />
       <div class="input-group-addon">
         Days
       </div>
    </div>
     </Form.Group>

    <Form.Group controlId="formBasicPassword">
         <Form.Label>
         Return/Exchange Applicable or Not</Form.Label><br/>
         <div class="form-check-inline">
         <label class="form-check-label" for="yes">
           <input type="radio" class="form-check-input" id="yes" name="optradio" value="yes" />Yes
         </label>
       </div>
       <div class="form-check-inline">
         <label class="form-check-label" for="no">
           <input type="radio" class="form-check-input" id="no" name="optradio" value="no"/>No
         </label>
       </div>
    </Form.Group>

       <Button className="btn-lg btn-block"  variant="success"  value="addadmin" onClick={AddProduct} type="submit">
         Add Product
       </Button>
     </Form>
     </div>

     </div>
        )
};

export default AddProduct;
