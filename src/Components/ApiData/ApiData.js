import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../ApiData/ApiData.css'

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
      <ul className="ul2">
        <div className="repoBox">
          {repos.map((repos) => (
            <li key={repos.id}>
              {repos.name}
              {repos.html_url}
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default ApiData
