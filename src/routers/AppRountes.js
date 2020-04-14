import React from "react";
import HomePage from "../components/HomePage";
import Academy from "../components/Academy";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "./../components/NotFoundPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />

      <Route path="/education" component={Academy} />

      <Route path="/portfolio" component={PortfolioPage} />

      <Route path="/contact" component={ContactPage} />

      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
