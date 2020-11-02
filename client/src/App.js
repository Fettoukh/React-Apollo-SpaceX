import "./App.css";
import logo from "./spacex.png";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Launches from "./component/Launches";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launch from "./component/Launch";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt=""
            style={{
              width: 300,
              display: "block",
              margin: "auto",
            }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
