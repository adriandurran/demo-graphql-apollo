const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const NASAEarthAPI = require('./datasources/nasa/earth');
const NASAEpicAPI = require('./datasources/nasa/epic');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    nasaEarthAPI: new NASAEarthAPI(),
    nasaEpicAPI: new NASAEpicAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
