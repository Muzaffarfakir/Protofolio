import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer"
export default function Contact() {
    let [name, SetName] = useState("");
    let [email, SetEmail] = useState("");
    let [body, SetBody] = useState("");
    let [sub, SetSub] = useState("");

    function btn() {
        if (name==""||email==""||body==""||sub=="") {
            alert("Fill All Details Plzz")

        } else {
            axios.post("https://protofolioback.onrender.com/Contact", { name, email, sub, body }).then((res) => {
                console.log(res)
            })
        }
    }




    return (
        <>
            <h2 className="text-center">Contact Me  </h2>
            <div className="text-center m-auto d-flex flex-wrap input-group ">
                <input encType="multipart/form-data" name="name" onChange={(e) => { SetName(e.target.value) }} type="text" placeholder=" Enter name Here" className="input form-control w-100 my-3 mx-3" />
                <input encType="multipart/form-data" name="email" onChange={(e) => { SetEmail(e.target.value) }} type="Email" placeholder="Enter E-mail Here " className="input form-control w-100 mx-3 my-3" />
                <input encType="multipart/form-data" name="sub" type="text" onChange={(e) => { SetSub(e.target.value) }} placeholder="Enter Subject Here" className="input form-control w-100 mx-3 my-3" />
                <textarea encType="multipart/form-data" name="body" onChange={(e) => { SetBody(e.target.value) }} cols={6} rows={6} type="text" placeholder="Body" className="input form-control my-3 mx-3 w-100 " />
                <button onClick={btn} className="btn btn-secondary text-center d-flex m-auto">Send</button>
            </div>
            <Footer />

        </>
    )
} 
