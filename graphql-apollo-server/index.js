const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello(name: String!): String
  }
`;

const resolvers = {
  Query: {
    hello: (name,args) => {
      console.log("name", name);
      console.log("args", args);

      return "hello world" + name;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

