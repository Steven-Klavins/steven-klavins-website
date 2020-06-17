import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import React from 'react'
import '../ProjectsTable/ProjectsTable.css'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async (operation) => {
    operation.setContext({
      headers: {
        authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })
  },
})

const ProjectsTable = () => {
  return <div></div>
}

export default ProjectsTable
