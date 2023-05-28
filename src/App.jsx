import {useEffect } from "react";
import { CURSOR_COLOR, } from "haspr-cursor";
import "./App.scss";

import Header from "/src/components/Header/Header";
import CallBtn from "./components/CallBtn/CallBtn";
import Nav from "./components/Nav/Nav";
import bgSvg from "./assets/icons/Bg.svg"


function App() {

     useEffect(() => {
          CURSOR_COLOR("RED");
     }, []);

     return (
          <>
               <div className="wrapper">
                    <div className="container">
                         <Header />
                         <main className="main">
                                   <Nav/>
                                   <div className="main__bg">
                                        <img className="main__bg-img" src={bgSvg} alt="bg" />
                                        <h1 className="main__title">Lorem ipsum dolor sit <br /> amet, <span> consectetur</span> </h1>
                                   </div>
                                   <div className="">
                                        <CallBtn/>
                                   </div>
                         </main>
                    </div>
               </div>
               <div className="clip-path-section">
                    <div className=""></div>
               </div>
          </>
     );
}

export default App;
