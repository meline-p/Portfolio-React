import "./index.css";
import "./Pages/Home/Home.css";
import "./Pages/Projets/Projets.css";
import "./Pages/CV/CV.css";
import "./Pages/Contact/Contact.css"
import "./Components/HomeCard/HomeCard.css";
import "./Components/NavbarCV/NavbarCV.css";
import "./Components/ExperiencePro/ExperiencePro.css";
import "./Components/Compétences/Competences.css"
import "./Components/Formation/Formation.css"
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import CV from "./Pages/CV/CV";
import Contact from "./Pages/Contact/Contact";
import Projets from "./Pages/Projets/Projets";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Portfolio/" component={Home} />
        <Route exact path="/Portfolio/cv" component={CV} />
        <Route exact path="/Portfolio/projets" component={Projets} />
        <Route exact path="/Portfolio/contact" component={Contact} />
      </Switch>
    </Router>
  );
}
