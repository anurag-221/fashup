import React ,{useState} from 'react';
import {Form,Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import './add_admin.css';


const AddAdmin=(props)=>{

  const history = useHistory();

  const [admin,setAdmin] = useState({
    name:"",email:"",password:""
  });

     let name, value;

     const handleInputs=(e)=>{
       console.log(e);
       name = e.target.name;
       value = e.target.value;
        
         setAdmin({...admin,[name]:value}); 

     }
      
     const MakeAdmin = async (e)=>{
         e.preventDefault();
         
         const {name,email,password}=admin;

         const res = await fetch('/register',{
           method:"post",
           headers: {
             "Content-Type" : "application/json"
           },
           body:JSON.stringify({

            name,email,password

           })
         });
         const data = await res.json();

         if(res.status === 422 || !data){
           window.alert("Invalid Registrarion");
           console.log("Invalid Registrarion");
         }else
         {
          window.alert("Registrarion Success");
          console.log("Registrarion Success");

          history.push("/Admin1");
         }

     }



    return (
  <div>

      
      
         <div>
       <Form method="post" className="form-container"> 
       <Form.Group controlId="formBasicEmail">
       <Form.Label>Enter Name
       <i class="fa fa-user-circle-o"></i>
       </Form.Label>
       <Form.Control type="text"
        value={admin.name}
        onChange={handleInputs}
         placeholder="Enter Name" autoComplete="off"/>
     </Form.Group>

       <Form.Group controlId="formBasicEmail">
         <Form.Label>
         Email address</Form.Label>
         <Form.Control type="email" 
         value={admin.email}
         onChange={handleInputs}
         placeholder="Enter email" autoComplete="off" />
       </Form.Group>
     
       <Form.Group controlId="formBasicPassword">
         <Form.Label>
         Password</Form.Label>
         <Form.Control type="password" 
         value={admin.password}
         onChange={handleInputs}
         placeholder="Password" autoComplete="off" />
       </Form.Group>

       <Button className="btn-lg btn-block"  variant="success"  value="addadmin" onClick={MakeAdmin} type="submit">
         Make Admin
       </Button>
     </Form>
     </div>

     </div>
        )
};

export default AddAdmin;
