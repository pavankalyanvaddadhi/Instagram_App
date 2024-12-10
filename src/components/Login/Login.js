
import axios from "axios";
import { Await } from "react-router-dom";
import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const userlogincredentials = {
  username: '',
  password: ''

}

export default function Login() {

  const [userdata, updateuserdata] = useState([])
  const [userlogincredentials, updateuserlogincredentials] = useState({})
  const navigate = useNavigate();

  function handleCaptureData(eventobj) {
    const name = eventobj.target.name;
    const value = eventobj.target.value
    console.log(name, value)
    updateuserlogincredentials(previousStatevalue => ({
      ...previousStatevalue, [name]: value
    }))

  }
  const handlelogin = async () => {


    console.log("updated data", userdata)



    // const userlogincredentials = {
    //   "id": 11,
    //   "name": "pavan",
    //   "username": "Bret",
    //   "email": "Sincere@april.biz",
    // }
    const url = axios.post("https://jsonplaceholder.typicode.com/users", userlogincredentials);

    // const url = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log("url", url.data)
    updateuserdata(url.data)

    // event.preventDefault()
    console.log(userlogincredentials)
    if (userlogincredentials.username === "pavan" && userlogincredentials.password === "123") {
      navigate("./Dashboard")
      //alert("Welcome to Dashboard");
    }
    else if (userlogincredentials.username === "Shiva" && userlogincredentials.password === "7711") {
      alert("Someone details are matched")
    }
    else {
      alert("Please check both credentials")
    }

  }
























  return (

    <>

      <div class="body" >
        <div class="row">
          <div className='col-3 card p-3'>

            <img class="img-src"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />


            <input type="email" name="username" onChange={handleCaptureData} class="form-control mt-20px" id="exampleDropdownFormEmail1"
              placeholder="Phone number ,Username or Email" />
            <div class="password-css">
              <input type="password" name="password" onChange={handleCaptureData} class="form-control" id="exampleDropdownFormpassword1"
                placeholder="Password" />
            </div>
            <div class="button1-css">
              <button class="button-css ml-100px" onClick={handlelogin} >Log in</button>
            </div>
            <div class="seperator">
              <span></span>
              <span>OR</span>
              <span></span>
            </div>




            <div class="login-css">
              <div class="fb-css">
                <img class="img-css"
                  src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png" />

                <button class="fbbutton-css">
                  Login with Facebook
                </button>
              </div>
              <button class="forgotbutton-css">
                Forgot-password?
              </button>
            </div>


          </div>



        </div>


      </div>



      <div className='row'>

        <div className='col-3  card p-3'>

          <h5>Don't have an account? <button class="button-css1">Sign Up</button> </h5>

        </div>

      </div>











    </>



  )

}
