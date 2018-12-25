const { ApolloServer } = require('apollo-server');

const NASAEarthAPI = require('./datasources/nasa/earth');

const server = new ApolloServer({
  dataSources: () => ({
    nasaEarthAPI: new NASAEarthAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
