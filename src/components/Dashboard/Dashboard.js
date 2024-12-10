import React from "react";
import { Button } from "bootstrap"
import { useNavigate } from "react-router-dom"

const Dashboard=()=> {
    const navigate = useNavigate();
    function handlemen() {
        navigate("./Home")

    }
    function handlemen1() {
        navigate("./Men")

    }
    function handlemen2() {
        navigate("./Women")

    }
    function handlemen3() {
        navigate("./Kids")

    }
    function handlemen4() {
        navigate("./Beauty")

    }
    function handlemen5() {
        navigate("./Studio")

    }






    return (

        <div class="cont-1">
            <div class="navbar">
                <button type="button" class="btn btn-warning" onClick={handlemen}>Home</button>
                <button type="button" class="btn btn-warning" onClick={handlemen1}>Men</button>
                <button type="button" class="btn btn-warning" onClick={handlemen2}>Women</button>
                <button type="button" class="btn btn-warning" onClick={handlemen3}>Kids</button>
                <button type="button" class="btn btn-warning" onClick={handlemen4}>Beauty</button>
                <button type="button" class="btn btn-warning" onClick={handlemen5}>Studio</button>
            </div>
        </div>












    )

}
export default Dashboard;