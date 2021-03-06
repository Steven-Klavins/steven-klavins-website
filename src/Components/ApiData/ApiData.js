import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../ApiData/ApiData.css'
import Repo from '../Repo/Repo'

function ApiData() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios
      .get('https://api.github.com/users/Steven-Klavins/starred')
      .then((res) => {
        console.log(res)
        setRepos(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <ul className="githubRepoContainer">
        <div className="githubRepoStyling">
          {repos.map((repos) => (
            <li className="githubRepolistFloat" key={repos.id}>
              <Repo
                link={repos.html_url}
                name={repos.name}
                description={repos.description}
                update={repos.updated_at}
                language={repos.language}
              />
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default ApiData
