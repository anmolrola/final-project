const {ApolloServer} = require('apollo-server');
const {PrismaClient} = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    INFO: () => 'This is an Api',
    GET_DATA: async (parent, args, context) => {
      return context.prisma.data.findMany()
    }
  },

  Mutation: {
      SEND_MESSAGE: (parent, args, context, info) => {
          const newData = context.prisma.data.create({
            data : {
              name: args.name,
              email: args.email,
              message: args.message,
            },
          }) 
          return newData;
      },
  }
}

const server = new ApolloServer({
typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
    ),
  resolvers,
  context : {
    prisma,
  }
})


server.listen().then(({ url }) => console.log(`Server is running on ${url}`));