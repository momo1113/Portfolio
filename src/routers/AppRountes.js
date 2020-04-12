import React from "react";
import HomePage from "../components/HomePage";
import EducationPage from "../components/EducationPage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "./../components/NotFoundPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true}></Route>
      <Route path="/education" component={EducationPage}>
        {" "}
        Education
      </Route>
      <Route path="/portfolio" component={PortfolioPage}>
        Portfolio
      </Route>
      <Route path="/contact" component={ContactPage}>
        Contact
      </Route>
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
