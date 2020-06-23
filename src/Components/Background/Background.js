import React from 'react'
import Particles from 'react-particles-js'
import '../Background/Background.css'

const background = () => {
  return (
    <Particles
      className="minbg"
      params={{
        particles: {
          line_linked: {
            distance: 300,
            color: '#66fcf1',
            shadow: {
              enable: true,
              color: '#66fcf1',
              blur: 5,
            },
          },
        },
      }}
    />
  )
}

export default background
