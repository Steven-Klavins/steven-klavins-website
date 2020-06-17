import ApolloClient, { from } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import React from 'react'
import '../ProjectsTable/ProjectsTable.css'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

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
const REPOSITORIES = gql`
  {
    user(login: "Steven-Klavins") {
      pinnedItems(last: 5, types: [REPOSITORY, GIST]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              primaryLanguage {
                name
              }
              url
              description
            }
          }
        }
      }
    }
  }
`

const ProjectsTable = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Query query={REPOSITORIES} variables={{}}>
          {({ data, loading }) =>
            loading ? <span>Loading data ...</span> : <div> Loaded!</div>
          }
        </Query>
      </div>
    </ApolloProvider>
  )
}

export default ProjectsTable
