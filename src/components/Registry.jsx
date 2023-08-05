import React from 'react'

const Registry = () => {

  return (
    <div>
      <h1 className="registryTitle">Bozier Registry</h1>
      <button className="homeButton btn btn-primary" src="/" onClick={() => window.open('/', '_self')} >Go Home</button>

    </div>
  )
}

export default Registry