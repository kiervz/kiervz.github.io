import React from "react";
import MainContent from "./layouts/MainContent";
import Navbar from "./layouts/Navbar";
import Main from "./pages/Main";

const App = () => {
    return (
        <div id="layout">
            <Navbar />
            <MainContent>
                <Main />
            </MainContent>
        </div>
    );
}

export default App;
