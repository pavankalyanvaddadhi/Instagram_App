//import Password from 'antd/es/input/Password';
import React, { useState } from 'react';

export default function Signup() {
    const [Userlogincredentials, updatedeUserlogincredentials] = useState({})

    function handlecapturedata(eventobj) {
        const name = eventobj.target.name;
        const value = eventobj.target.value
        console.log(name, value)

        updatedeUserlogincredentials(previousstatevalue => ({
            ...previousstatevalue, [name]: value
        }))



    }


    function handlelogin() {
        console.log(Userlogincredentials, "Userlogincredentials")
    }





    return (



        <>
            <div class="display-css">
                <div>
                    <p>email: {
                        Userlogincredentials.email
                    } </p>

                </div>
                <div>
                    <p>
                        password:{
                            Userlogincredentials.password
                        }
                    </p>


                </div>
                <div>
                    <p>
                        fullname:{
                            Userlogincredentials.fullname
                        }
                    </p>

                </div>
                <div>
                    <p>
                        username:{
                            Userlogincredentials.username
                        }
                    </p>

                </div>
            </div>
            <div class="body-css">
                <div class=" container-fullbody">

                    <div class=" container-css">


                        <img class="img-src"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />

                        <p class="p-css">Sign up to see photos and videos from your friends</p>
                        <input type="email" name="email" class=" form-control" id="exampleDropdownFormEmail1"
                            placeholder="Mobile Number or Email" onChange={handlecapturedata} />
                        <div class="password-css">
                            <input type="password" name="password" class="form-control" id="exampleDropdownFormpassword1"
                                placeholder="Password" onChange={handlecapturedata} />
                        </div>
                        <div class="text-css1">
                            <input type="text" name="fullname" class="form-control" placeholder="Full Name" aria-label="Full Name" onChange={handlecapturedata} />
                        </div>
                        <div class="text-css2">
                            <input type="text" name="username" class="form-control" placeholder="Username" aria-label="Username" onChange={handlecapturedata} />
                        </div>





                        <p class="p-css">People who use our service may have uploaded your contact information to
                            instagram.Learn More</p>
                        <p class="p-css">By signing up,you agree to our Terms,Privacy Policy and Cookies Policy</p>
                        <button class="button-css" onClick={handlelogin} >Sign UP</button>
                    </div>



                    <div class="row">
                        <div class="col-4 card ">
                            <div class="row">
                                <div className='col-8'>
                                    <h5>Have an account?</h5>
                                </div>
                                <div className='col-4'>
                                    <button class="button-css1" >Log in</button>
                                </div>
                            </div>
                            

                            </div>
                        </div>
                    </div>
                </div>
            
        </>



    )

}




// const [inputvalue, updateinputvalue] = useState('')
//   const [password, updateinputpassword] = useState('')
//   //console.log(App)
//   function captureinput(inputvalue) {
//     updateinputvalue(inputvalue.target.value)

//   }
//   function capturepassword(inputpassword) {
//     updateinputpassword(inputpassword.target.value)

//   }
//   function submitbutton() {
//     console.log(inputvalue, "username", password, "password")
//   }
//   return (
//     <>
//       <div class="custom-css">
//         username
//         <input type="text" onChange={captureinput} />
//         password
//         <input type="password" onChange={capturepassword} />

//         <button onClick={submitbutton} >signup</button>
//       </div>
//     </>
