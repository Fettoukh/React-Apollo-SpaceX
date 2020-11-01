import "./App.css";
import logo from "./spacex.png";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Launches from "./component/Launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
