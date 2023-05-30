import './App.scss'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Weather from "./Weather/Weather";
import React from "react";

function App() {
    return (
        <div>
            <div className='main-wrapper'>
           <Header></Header>
           <Weather></Weather>
           <Footer></Footer>
           </div>
        </div>
        )
}


export default App;