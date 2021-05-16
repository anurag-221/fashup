import React ,{useState} from 'react';
import {Form,Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import './add_vendor.css';


const AddVendor=(props)=>{


    return (
  <div>

      
    
         <div>
       <Form method="post" className="form-container"> 
       <Form.Group controlId="formBasicPriority">
       <Form.Label>Priority 
       <i class="fa fa-user-circle-o"></i>
       </Form.Label>
       <Form.Control type="text"
         placeholder="Priority" autoComplete="off"/>
     </Form.Group>

     <Form.Group controlId="formBasicName">
     <Form.Label> Name <sup class="star">*</sup>
     <i class="fa fa-user-circle-o"></i>
     </Form.Label>
     <Form.Control type="text"
       placeholder="Enter Name" autoCapitalize="on" autoComplete="off"/>
   </Form.Group>

   <Form.Group controlId="formBasicPhone">
         <Form.Label>
         Phone <sup class="star">*</sup> </Form.Label>
         <Form.Control type="tel" pattern="[0-9]{10}"

         placeholder="9876543210" autoComplete="off" />
       </Form.Group>

       <Form.Group controlId="formBasicEmail">
         <Form.Label>
         Email <sup class="star">*</sup> </Form.Label>
         <Form.Control type="email" 

         placeholder="Enter email" autoComplete="off" />
       </Form.Group>
     
       <Form.Group controlId="formBasicLocation">
         <Form.Label>
         Location <sup class="star">*</sup> </Form.Label>
         <Form.Control type="email" 

         placeholder="-------" autoComplete="off" />
       </Form.Group>

       <Form.Group controlId="formBasicCommission">
         <Form.Label>
         Commission in Percentage(%) <sup class="star">*</sup> </Form.Label>
         <Form.Control type="number" min="0" max="100" step="0.1"

         placeholder="Commission" autoComplete="off" />
       </Form.Group>

       <Form.Group controlId="formBasicAddress">
         <Form.Label>
         Address <sup class="star">*</sup></Form.Label>
         <textarea class="form-control" rows="5" id="comment" name="address"  placeholder="Address"></textarea>
       </Form.Group>

       <Form.Group controlId="formBasicProduct">
         <Form.Label>
         Maximun Product Upload Limit  </Form.Label>
         <Form.Control type="number" min="0" max="1" step="1"

         placeholder="1" autoComplete="off" />
       </Form.Group>

       <Form.Group controlId="formBasicCoverImage" >
          <Form.Label>Cover Images</Form.Label>
       
       <Form.Control type="file"
         placeholder="Upload Images" id="cvrimg" accept="image/x-png,image/jpeg" autoComplete="off"/>
    </Form.Group>

    <Form.Group controlId="formBasicImages" >
          <Form.Label>Images</Form.Label>
       
       <Form.Control type="file"
         placeholder="Upload Images" id="img" accept="image/x-png,image/jpeg" autoComplete="off"/>
    </Form.Group>

       <Button className="btn-lg btn-block"  variant="success"  value="addadmin" onClick={AddVendor} type="submit">
         Add Vendor
       </Button>
     </Form>
     </div>

     </div>
        )
};

export default AddVendor;
