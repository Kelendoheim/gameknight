import { useEffect } from "react";
import Axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import LoginCreateAccount from "./pages/LoginCreateAccount/LoginCreateAccount";
import CreateEditEvent from "./pages/CreateEditEvent/CreateEditEvent";
import MyEvents from "./pages/MyEvents/MyEvents";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    console.log("Make an API call");
    Axios.get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={LoginCreateAccount} />
          <Route exact path="/create-event" component={CreateEditEvent} />
          <Route exact path="/edit-event" component={CreateEditEvent} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/1" component={MyEvents} />
          <Route exact path="/profile/" component={Profile} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>

  
  );
}

export default App;
