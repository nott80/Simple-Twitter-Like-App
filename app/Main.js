import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Component
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Home from "./components/Home"
import Footer from "./components/Footer"

//Pages
import About from "./components/About"
import Terms from "./components/Terms"
import CreatePost from "./components/CreatePost"

function Main() {
  const [isLogin, setIslogin] = useState(Boolean(localStorage.getItem("complexAppToken")))
  return (
    <BrowserRouter>
      <Header isLogin={isLogin} setIslogin={setIslogin} />
      <Switch>
        <Route path="/" exact>
          { isLogin ? <Home /> : <HomeGuest /> }
        </Route>
        <Route path="/about-us" exact>
          <About />
        </Route>
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/terms" exact>
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
