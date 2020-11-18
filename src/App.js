import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout";
import Home from "./components/home/home";
import NotFound from "./pages/not-found/NotFound";
import PlayersTable from "./components/players/PlayersTable";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/players" component={PlayersTable} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
