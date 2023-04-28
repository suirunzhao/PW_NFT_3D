import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App.jsx'

const pexel = (id) => `../${id}.jpg`

const matchResult = window.matchMedia("(max-width: 1400px)");

// console.log(matchResult);

if (matchResult.matches) {
  const images = [
    // Front
    { position: [0, 1.2, -2], rotation: [0, 0, 0], url: pexel(0) },
    // Back
    { position: [-1.25, 1.2, -2], rotation: [0, 0, 0], url: pexel(7) },
    { position: [1.25, 1.2, -2], rotation: [0, 0, 0], url: pexel(5) },
    // Left
    { position: [-1.25, 2.4, -2], rotation: [0, 0, 0], url: pexel(3) },
    { position: [0, 2.4, -2], rotation: [0, 0, 0], url: pexel(4) },
    { position: [1.25, 2.4, -2], rotation: [0, 0, 0], url: pexel(1) },
    // Right
    { position: [-1.25, 0, -2], rotation: [0, 0, 0], url: pexel(6) },
    { position: [0, 0, -2], rotation: [0, 0, 0], url: pexel(2) },
    { position: [1.25, 0, -2], rotation: [0, 0, 0], url: pexel(9) }
  ]
  createRoot(document.getElementById('root')).render(<App images={images} />)
} else {
  const images = [
    // Front
    { position: [0, 0, -2], rotation: [0, 0, 0], url: pexel(0) },
    // Back
    { position: [-1.25, 0, -2], rotation: [0, 0, 0], url: pexel(7) },
    { position: [1.25, 0, -2], rotation: [0, 0, 0], url: pexel(5) },
    // Left
    { position: [-2, 0, -0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(3) },
    { position: [-2.4, 0, 1], rotation: [0, Math.PI / 2.5, 0], url: pexel(4) },
    { position: [-2.8, 0, 2.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(1) },
    // Right
    { position: [2, 0, -0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(6) },
    { position: [2.4, 0, 1], rotation: [0, -Math.PI / 2.5, 0], url: pexel(2) },
    { position: [2.8, 0, 2.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(9) }
  ]
  createRoot(document.getElementById('root')).render(<App images={images} />)
}


export default pexel;



