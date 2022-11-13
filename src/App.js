import React from "react";
import MainContent from "./layouts/MainContent";
import Navbar from "./layouts/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
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
                <Contact />
                <Footer />
            </MainContent>
        </div>
    );
}

export default App;
