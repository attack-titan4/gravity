import React from 'react'
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 


const Stars = () => {

    const particlesInit = async (main) => { 
        console.log(main); 
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
        // starting from v2 you can add only the features you need reducing the bundle size 
        await loadFull(main); 
      }; 
      const particlesLoaded = (container) => { 
        console.log(container); 
      }; 
    
  return (
    <div>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: 'black',
        },
        fpsLimit: 60,
        particles: {
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 1.4,
          },
          color: {
            value: '#f1f1f1',
          },
          number: {
            density: {
              enable: true,
              area: 800, // Reduce the area to make the particles more concentrated
            },
            limit: 0,
            value: 200, // Reduce the number of particles
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.1,
              speed: 1,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: 1,
          },
          interactivity: {
            detectsOn: 'canvas',
            events: {
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100, // Adjust the distance as needed
              },
            },
          },
          // move: {
          //   enable: true,
          //   speed: 1.5, // Adjust the speed of particle movement
          // },
        },
      }}
    />
  </div>
  )
}

export default Stars