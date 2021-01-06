import React from 'react'
import ParticlesJS from 'react-particles-js'
import MediaQuery from 'react-responsive'

const particlesParams = {
    fpsLimit: 60,
    backgroundMode: {
      enable: false,
      zIndex: 0
    },
    background: {
      color: {
        value: "#0a192f"
      }
    },
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          area: 200
        }
      },
      color: {
        value: "random"
      },
      shape: {
        type: ["polygon"],
        stroke: {
          width: 0,
          color: "random"
        },
        polygon: {
          sides: 5
        }
      },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          speed: .7,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        animation: {
          enable: false,
          speed: 40,
          minimumValue: 0.1,
          sync: false
        }
      },
      lineLinked: {
        enable: false,
        distance: 150,
        color: "e5de55",
        opacity: 0.4,
        width: 1
      },
      collisions: {
        enable: true,
        mode: "bounce"
      },
      move: {
        enable: true,
        speed: .5,
        direction: "bottom-left",
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "bubble"]
        },
        onClick: {
          enable: true,
          mode: ["push", "repel"]
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 300,
          line_linked: {
            opacity: .5
          }
        },
        bubble: {
          distance: 300,
          size: 15,
          duration: 2,
          opacity: 0.8
        },
        push: {
          particles_nb: 1,
          duration: 2
        }
      }
    }
}

const Particles = () => (
  <MediaQuery minDeviceWidth={768} >
    <ParticlesJS 
        id="tsparticles"
        className=""
        params={particlesParams}
        height="100vh"
        width="100%"
        style={{
          margin: 0,
          zIndex: 0,
          position: 'absolute'
        }}
    />
  </MediaQuery>
)

export default Particles;