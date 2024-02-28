import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <BrowserRouter>

                <nav  className="navbar navbar-expand-lg navbar-light bg-dark text-white view overlay">
                    <h5 >
                        Muzaffar
                    </h5>
                    <li className="list-unstyled">
                        <Link id="h" className="text-white  text-decoration-none btn btn-secondary-outline" to={"/"}>Home</Link>

                    </li>
                    <li className="list-unstyled" >
                        <Link  className="text-white  text-decoration-none btn btn-secondary-outline " to={"/About"}>About</Link>

                    </li>
                
                    <li className="list-unstyled">
                        <Link className="text-white  text-decoration-none btn btn-secondary-outline" to={"/Contact"}>Contact</Link>

                    </li>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}

                    />
                    <Route
                        path="/About"
                        element={<About />}

                    />
                
                      <Route
                        path="/Contact"
                        element={<Contact />}

                    />

                </Routes>
            </BrowserRouter>


        </>
    )


}
export default Navbar