import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Llayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/not-found/NotFound";
import Players from "./pages/players/Players";
import PlayerDetails from "./components/players/PlayerDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/players/:id" component={PlayerDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
