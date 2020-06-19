import React, { useEffect, useState } from 'react'
import '../ProjectsTable/ProjectsTable.css'






const ProjectsTable = () => {

  const [name, setName] = useState('');
  const [html_url, setHtmlUrl] = useState('');
  const [description, setDescription] = useState('');
  const [languages_url, setLanguagesUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Steven-Klavins/starred")
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
  }, [])

  const setData = ({ name, html_url, description, languages_url }) => {
    setName(name)
    setHtmlUrl(html_url)
    setDescription(description)
    setLanguagesUrl(languages_url)

  }
  return (
    <div className='projectsTable'>
      <p>Name <span>{name}</span></p>
    </div>
  )
}

export default ProjectsTable
