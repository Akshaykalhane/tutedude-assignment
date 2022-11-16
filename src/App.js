import React from "react";
import './app.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import RefEarn from "./component/refEarn";
import Header from "./component/Header";
import Enroll from "./component/enroll";

const App=()=>{

    return(
        <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<RefEarn/>}></Route>
                <Route path="/ref" element={<Enroll/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
