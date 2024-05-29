import React from "react"
import ReactDom from "react-dom/client"
import NavBar from "../components/NavBar"
import Poster from "../components/Poster"
const AppLayout=()=>{
    return (
       <div>
        <NavBar/>
        <Poster/>
       </div>
    )
}
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)