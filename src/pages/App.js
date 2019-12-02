import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Blockchain from "pages/Blockchain";
import Wallet from "pages/Wallet";
import Pool from "pages/Pool";
import Top from "pages/Top";
import Navigation from "layouts/navigation/Navigation";
import Footer from "layouts/navigation/Footer";

export default () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navigation data-test='navigation' />}
      <Switch>
        <Route path='/wallet' component={Wallet} />
        <Route path='/pool' component={Pool} />
        <Route path='/chain' component={Blockchain} />
        <Route path='/' component={Top} />
      </Switch>
      {location.pathname !== "/" && <Footer data-test='footer' />}
    </>
  );
};
