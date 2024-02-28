import React, { useEffect, useRef } from "react";
import Typed from "typed.js"
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"
export default function Home() {
    let nav=useNavigate();

    let ref = useRef();
    useEffect(() => {

        let typed = new Typed(ref.current, {
            strings: ["Muzaffar", "Full MERN Stack Dev ", "Programmer", "Student"],
            typeSpeed: 120,
            backSpeed: 70
        })
    }, [])


    return (
        <>

            <h1 className="my-3 mx-3 p-3">
                I am <span ref={ref} id="s"></span>
            </h1>
            <h6 className="my-3 mx-3 p-3">
                I am Full
                A full MERN (MongoDB, Express.js, React.js, Node.js) And
                I am a Collage Student Studying COCSIT Bsc.CS


            </h6>

            <div className="d-flex my-3 mx-3">

                <button onClick={(e)=>{nav("/About")}} className="btn btn-primary-outline">About Me </button>
                <button onClick={(e)=>{nav("/Contact")}} className="btn btn-primary-outline">Contact Me </button>
            </div>
            <div>
                <hr />
            </div>
            <h5 className="text-center">Mongodb</h5>

            <div class="text-center bg-image hover-overlay shadow-1-strong rounded d-flex m-auto mx-3 my-3 flex-wrap"
                data-mdb-ripple-init
                data-mdb-ripple-color="light" >
                <img src="https://img-c.udemycdn.com/course/750x422/5469392_7a39_7.jpg" className="w-100 text-center" alt="logo" style={{ borderRadius: "30px" }} />
                <h6 className="mx-3 my-3">
                    MongoDB is a NoSQL database management system known for its flexibility and scalability. It stores data in a BSON (Binary JSON) format, allowing for the storage of diverse and complex data structures. MongoDB uses a document-oriented model, where data is organized in collections of JSON-like documents. It's particularly well-suited for handling large volumes of unstructured or semi-structured data and is often used in modern web development for its ease of scaling and integration with technologies like Node.js. The database's schema-less design allows for dynamic and agile development, making it popular for applications requiring fast iteration and evolving data structures.

                </h6>
            </div>

            <div>
                <hr />
            </div>
            <h5 className="text-center">React</h5>

            <div class="bg-image hover-overlay shadow-1-strong rounded d-flex mx-3 my-3 flex-wrap"
                data-mdb-ripple-init
                data-mdb-ripple-color="light" >
                <img src="https://w0.peakpx.com/wallpaper/809/380/HD-wallpaper-react-js-logo-programming-computer-logo.jpg " className="w-100 text-center" alt="logo" style={{ borderRadius: "30px" }} />
                <h6 className="mx-3 my-3">
                    React is a JavaScript library developed and maintained by Facebook for building user interfaces. It is widely used in modern web development to create efficient and interactive front-end applications. React employs a component-based architecture, allowing developers to build reusable and modular UI elements. Its declarative syntax simplifies the process of describing how the UI should look, and React efficiently updates and renders components as the underlying data changes. The virtual DOM (Document Object Model) in React optimizes rendering, enhancing performance by minimizing unnecessary updates to the actual DOM. React is often used in conjunction with other technologies, forming the core of the MERN stack (MongoDB, Express.js, React.js, Node.js) for full-stack web development.

                </h6>
            </div>
            <div>
                <hr />
            </div>
            <h5 className="text-center">Nodejs</h5>

            <div class="bg-image hover-overlay shadow-1-strong rounded d-flex mx-3 my-3 flex-wrap"
                data-mdb-ripple-init
                data-mdb-ripple-color="light" >
                <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*3P2N4NnzV73j7f3QYqOahg.png" className="w-100 text-center" alt="logo" style={{ borderRadius: "30px" }} />

                <h6 className="mx-3  my-3">
                    Node.js is a JavaScript runtime environment built on the V8 engine, allowing developers to execute JavaScript code on the server side. It provides an event-driven, non-blocking I/O model that is efficient and scalable, making it well-suited for building fast and lightweight network applications. Node.js is particularly popular for creating server-side components of web applications, enabling the development of scalable and high-performance servers. Its package manager, npm, facilitates the easy integration of third-party libraries and tools. Node.js is a key component of the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a unified JavaScript-based language for both server and client-side development.

                </h6>
            </div>
            <div>
                <hr />
            </div>
            <h5 className="text-center">Express</h5>

            <div class="bg-image hover-overlay shadow-1-strong rounded d-flex mx-3 my-3 flex-wrap"
                data-mdb-ripple-init
                data-mdb-ripple-color="light" >
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--mH07Z2ds--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/i/5vzr2cps82xkoamlm9qy.png" className="w-100 text-center" alt="logo" style={{ borderRadius: "30px" }} />

                <h6 className="mx-3 my-3">
                    Express.js is a minimalist and flexible web application framework for Node.js. It simplifies the process of building robust and scalable web applications by providing a set of features and tools for handling HTTP requests, managing routes, and working with middleware. Express.js is widely used for creating RESTful APIs (Application Programming Interfaces) and is known for its simplicity and ease of use. It allows developers to structure their applications in a modular way using middleware functions, making it efficient for building both small and large-scale web applications. As part of the MERN (MongoDB, Express.js, React.js, Node.js) stack, Express.js handles the server-side logic and serves as the backend framework for web development.

                </h6>
            </div>
            <div className="mx-3">

            </div>
            <Footer />












        </>
    )
} 