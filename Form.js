import React from 'react'
import { useState } from 'react'
import "../Components/Form.css"

const Form = () => {
  const [data,setdata]=useState({
    username : '',
    email : '',
    password : '',
    confirmpassword : '',

  })
  const {username,email,password,confirmpassword}=data;

  const  changeHandler = e =>{
    setdata({...data,[e.target.name]:e.target.value})
  }

   const  submitHandler = e =>
   {
    e.preventDefault();
    if(username == "" ||email == '' || password == ''|| confirmpassword == '')
    {
      alert("fill all fields first");
      return false;
    }
    if(username.length<=5){
      alert("username must be at least 5 characters");
      return false;
    }
    if(password.length<=6){
      alert("password must be above 6 characters");
      return false;
    } 
    if(password !== confirmpassword)
    {
      alert("password mis match")
      return false;
    }
    else{
      alert("submitted successfully");
    }
    console.log(data);
   }
  return (
    <div className='border'>
         <center>
      <form onSubmit={submitHandler}>
        <tr>
          <label> username </label>
          <input type="text" name='username'onChange={changeHandler}value={username} /> 
          </tr>
        
        <tr>
          <label> Email </label>
          <input type="email" name='email' value={email} onChange={changeHandler}/> 
        </tr>
        <tr>
          <label> password</label>
          <input type="password" name='password' value={password} onChange={changeHandler}/>
        </tr>
        <tr>
          <label> confirmpassword </label>
          <input type="password" name='confirmpassword'value={confirmpassword} onChange={changeHandler}/>
        </tr>
        <tr>
          <input className='submit' type='submit' name="submit"/>
        </tr>

      </form>
      </center>
    </div>
  )
}

export default Form