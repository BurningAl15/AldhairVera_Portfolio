import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import "./Components/styles/Navbar.css";
import "./Components/styles/welcome-section.css";
import "./Components/styles/CardElement.css";
import "./Components/styles/PublishedProjects.css";

import "./Components/styles/AboutMe.css";
import "./Components/styles/Footer.css";

import LandingPage from "./Page/LandingPage";
// import Games from "./Page/Games";

// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />

    //   <Switch>
    //     <Route exact path="/" component={LandingPage} />
    //     <Route exact path="/Gaming" component={Games}/>
    //   </Switch>

    //   <Footer />
    // </BrowserRouter>

    <React.Fragment>
      <LandingPage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
