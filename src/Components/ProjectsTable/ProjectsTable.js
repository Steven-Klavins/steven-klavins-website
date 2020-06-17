import React from 'react'
import '../ProjectsTable/ProjectsTable.css'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { from } from 'apollo-boost'

const REPOS = gql`
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
    <div className='projectsTable'>
      <Query query={REPOS} variables={{}}>
        {({ data, loading, error }) => (
          error ? <span>Error Loading Github data</span> : <div>{data}</div>
        )}
      </Query>
    </div>
  )
}

export default ProjectsTable
