import React from "react";
import MainContent from "./layouts/MainContent";
import Navbar from "./layouts/Navbar";
import About from "./pages/About";
import Main from "./pages/Main";
import Work from "./pages/Work";

const App = () => {
    return (
        <div id="layout">
            <Navbar />
            <MainContent>
                <Main />
                <About />
                <Work />
            </MainContent>
        </div>
    );
}

export default App;
