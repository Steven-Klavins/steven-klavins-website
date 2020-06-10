import React from 'react'
import Particles from 'react-particles-js'

const background = () => {
  return (
    <Particles
      params={{
        particles: {
          line_linked: {
            distance: 200,
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
