import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/projets')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!titre || !description) return
    const password = prompt("Mot de passe pour valider l'ajout :")
    const response = await fetch('http://localhost:5000/projets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titre, description, password })
    })
    const result = await response.json()
    if (result.success) {
      setProjects([...projects, { titre, description }])
      setTitre('')
      setDescription('')
    } else {
      alert('Erreur : ' + (result.error || 'Impossible d’ajouter le projet'))
    }
  }

  return (
    <div className="container">
      <section className="profile">
        <img src="photo.jpg" alt="Moi" className="avatar" />
        <h1>ALLA Mohamed</h1>
        <p>Développeur passionné par le web et les nouvelles technologies</p>
      </section>

      <section className="projects">
        <h2>Mes Projets</h2>
        <ul>
          {projects.map((projet, index) => (
            <li key={index} className="project-item">
              <strong>{projet.titre}</strong> – {projet.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="add-project">
        <h2>Ajouter un projet</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            className="input"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea"
          ></textarea>
          <button type="submit" className="button">Ajouter</button>
        </form>
      </section>
    </div>
  )
}

export default App
