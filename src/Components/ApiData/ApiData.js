import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
      <ul>
        {repos.map((repos) => (
          <li key={repos.id}>{repos.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ApiData
