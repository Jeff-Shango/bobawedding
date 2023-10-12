import React from 'react'

const Success = () => {
  return (
    <div>
        <h1>Thank you, We Appreciate and Love you!</h1>

        <button className='btn btn-primary' onClick={() => window.open('http://bozierwedding.netlify.app/', "_parent")}>
            Go Back Home!
        </button>
        
    </div>
  )
}

export default Success