import React from "react";
import ExperiencePro from "../../Components/ExperiencePro/ExperiencePro";
import Formation from "../../Components/Formation/Formation";
import Competences from "../../Components/Compétences/Competences";
import Footer from "../../Components/Footer/Footer";
import NavbarCV from "../../Components/NavbarCV/NavbarCV";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function CV() {
  return (
    <div className="container-cv">
      {/* <Router>
        <NavbarCV />
        <Switch>
          <Route exact path="/Portfolio/cv" component={ExperiencePro} />
          <Route exact path="/Portfolio/cv/formation"  component={Formation} />
          <Route exact path="/Portfolio/cv/competences"  component={Competences} />
        </Switch>
      </Router> */}
      <Competences />
      <ExperiencePro />
      <Formation />
      <Footer />
    </div>
  );
}
