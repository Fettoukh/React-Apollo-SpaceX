const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true, // to deploy the grpahql playground
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("listening to" + PORT));
