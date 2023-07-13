import React from 'react'
import { useState ,useMemo} from 'react';
import { signUp  }  from '../service/UserService';
import '../App.css';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { ToastContainer,toast } from 'react-toastify';

export default function Registration (){
    const options = useMemo(() => countryList().getData(), [])

    const[details, setDetails] = useState({
      firstName:'',
      lastName:'',
      middleName:'',
        userName: '',
        email:'',
        password: '',
        country:'',
        address1:'',
        address2:'',
        zip:'',
        city:'',
        state:'',
        roleCodes:[3]

    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setDetails({ ...details, [name]: value });
      console.info(details)
    };
    
    const handleSignUp = (e) => {
      e.preventDefault();
        console.info(details)
        signUp(details).then((res)=>{
          console.log(res);
         
          if(res==="User Already Exist"){
            toast.warn("User Already Exist");
          }
          else{
            toast.success("Succesfull Registration" );
          }
        }).catch((error)=>{
          console.log(error);
          console.log("Registration Failed");
          toast.warn("Registration Failed");
        })
      };


    return(
     
  <form className='container'>
   
  <div className="form-row">
  <ToastContainer/> 
  <div className="form-group col-md-6">
      <label for="inputFirstName">FirstName</label>
      <input type="text"
             name="firstName"
             placeholder="firstName"
             value={details.firstName}
             onChange={handleChange} 
             className="form-control" />
    </div>
    <div className="form-group col-md-6">
      <label for="inputLastName">LastName</label>
      <input type="text"
             name="lastName"
             placeholder="lastName"
             value={details.lastName}
             onChange={handleChange} 
             className="form-control" />
    </div>
    <div className="form-group col-md-6">
      <label for="inputMiddleName">MiddleName</label>
      <input type="text"
             name="middleName"
             placeholder="middleName"
             value={details.middleName}
             onChange={handleChange} 
             className="form-control" />
    </div>
    <div className="form-group col-md-6">
      <label for="inputUserName">UserName</label>
      <input type="text"
             name="userName"
             placeholder="UserName"
             value={details.userName}
             onChange={handleChange} 
             className="form-control" />
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" name="email" className="form-control"  placeholder="Email"
      onChange={handleChange}
      value={details.email}
      />
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password"
        onChange={handleChange}
        value={details.password}
      />
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address 1</label>
    <input type="text" name="address1" className="form-control" id="inputAddress" placeholder="address"
      onChange={handleChange}
      value={details.address1}
    />
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" name="address2" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
      onChange={handleChange}
      value={details.address2}
    />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" name="city" className="form-control" id="inputCity"
        onChange={handleChange}
        value={details.city}
      />
    </div>
    <div className="form-group col-md-6">
      <label for="inputState">State</label>
      <input type="text" name="state" className="form-control" id="inputState"
        onChange={handleChange}
        value={details.state}
      />
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">Country</label>
      <Select type = "text"id="inputState" className="form-control"   
      options={options} name="country" value={details.country}  onChange={country=>handleChange({ target: { value: country.label, name: 'country' } })}>
      </Select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" name="zip" value={details.zip} className="form-control" id="inputZip" onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button className="btn btn-primary" type="submit" onClick={handleSignUp}>SignIn</button>
</form>
    );
}