import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";
import { Nav, Home, Footer } from "./components";

function App() {
  return (
    // <div className="flex flex-col justify-center bg-gray-200 text-center min-h-screen">
    <div className="bg-gray-400 font-sans leading-normal tracking-normal">
      <Router>
        <Nav />
        <div
          className="w-full px-12 my-0 mt-20 bg-blue text-center"
          style={{ backgroundColor: "#0D2F51" }}
        >
          <h1 className="text-2xl font-extrabold text-blue text-gray-500 pb-10" id="about">
            Fuelling your aspirations through{" "}
            <RoughNotation type="underline" iterations={4} show={true}>
              technology
            </RoughNotation>
          </h1>
        </div>
        <div className="container shadow-lg mx-auto bg-grey md:mt-18 min-h-full">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
