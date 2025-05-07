import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  const particlesConfig = {
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#007bff", "#6c757d", "#17a2b8", "#28a745"]
      },
      shape: {
        type: ["circle", "triangle", "square"],
      },
      opacity: {
        value: 0.6,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "bubble"]
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.8
          }
        },
        bubble: {
          distance: 200,
          size: 12,
          duration: 2,
          opacity: 0.8
        },
        push: {
          particles_nb: 3
        }
      }
    },
    retina_detect: true
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      className="particles-background"
    />
  )
}

export default ParticlesBackground