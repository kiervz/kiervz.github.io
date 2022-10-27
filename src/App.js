import React from "react";
import MainContent from "./layouts/MainContent";
import Navbar from "./layouts/Navbar";
import About from "./pages/About";
import Main from "./pages/Main";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

const App = () => {
    return (
        <div id="layout">
            <Navbar />
            <MainContent>
                <Main />
                <About />
                <Work />
                <Skills />
                <div className='featured-text text-center' style={{marginBottom: '120px'}}>
                    <p className='text-center'>**Under Construction**</p>
                </div>
            </MainContent>
        </div>
    );
}

export default App;
