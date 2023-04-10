import React ,{useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

   

    const [UserData,SetUserData]=useState('');
    const [PasswordData,SetPasswordData]=useState('');
    const [ErrorData,SetError]=useState(false);
     
    let navigate=useNavigate();
    const gotoHome=()=>{
        navigate("/Home");
    }
    const gotoForm=()=>{
      navigate("/FormTask");
  }

  const OnsubmitUser=(e)=>{
    console.log(e.target.value);
    SetUserData(e.target.value);
  }  
  const OnsubmitPswd=(e)=>{
    console.log(e.target.value);
    SetPasswordData(e.target.value);
  } 

  const onSubmitForm=(e)=>{
    e.preventDefault();
    SetError(true);
    // console.log(User.name);

    const User = require('../User.json');
    // console.log(User);
    

    const useritem =User.find((useritem)=>useritem.UserData===UserData);

    // console.log(useritem);
    if(UserData==="" || PasswordData==="" ){
        // return;
        SetError("fill all data")
    }
    else if(!useritem){
      SetError("Object mismatch")
    }
    else if(useritem.PasswordData!==PasswordData){
      SetError("Password mismatch")
    }
    else{
      gotoHome();
    }


    };

   

   



  return (
    <div>
        <h3>LogIn Form</h3>
        <form onSubmit={onSubmitForm}>
            <label>User-Name</label>
            <input type="text" name="userName" onChange={OnsubmitUser} ></input><br/>
            {UserData==="" && ErrorData && <p>Name Required</p>}
            <label>Password</label>
            <input type="password" name="pswd" onChange={OnsubmitPswd}></input><br/>
            {PasswordData==="" && ErrorData && <p>Password Required</p>}

            <input type="submit" ></input>
            {ErrorData && <p>{ErrorData}</p>}
        </form>

        <div>
          <button onClick={gotoForm}>Form</button>
        </div>


    </div>
  )
}

export default Login