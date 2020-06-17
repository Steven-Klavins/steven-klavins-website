import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './fonts/Antapani-ExtraBold.otf'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  try: {
    request: async (operation) => {
      operation.setContext({
        headers: {
          authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      })
    }
  },
  catch(error) {
    console.log(error)
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)




