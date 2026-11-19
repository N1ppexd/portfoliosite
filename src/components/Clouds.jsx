import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

const cloudAnchors = [
  { x: 0.1, y: 0.03, scale: 1.4 },
  { x: 0.86, y: 0.2, scale: 2.4 },
  { x: 0.08, y: 0.42, scale: 0.65 },
  { x: 0.9, y: 0.6, scale: 0.9 },
  { x: 0.12, y: 0.67, scale: 0.72 },
  { x: 0.86, y: 0.9, scale: 1.5 },
  { x: 0.7, y: 0.9, scale: 2 },
]

function createCloud(material, scale) {
  const drift = new THREE.Group()
  const boxGeometry = new THREE.BoxGeometry(78 * scale, 30 * scale, 30 * scale)
  const boxes = [
    { x: -34 * scale, y: -8 * scale, z: 0 },
    { x: 0, y: 8 * scale, z: 4 * scale },
    { x: 36 * scale, y: -6 * scale, z: -2 * scale },
  ]

  boxes.forEach(({ x, y, z }) => {
    const box = new THREE.Mesh(boxGeometry, material)
    box.position.set(x, y, z)
    box.rotation.set(0.08, 0.16, 0.04)
    drift.add(box)
  })

  drift.rotation.set(-0.08, 0.12, 0)
  return { drift, boxGeometry }
}

function Clouds() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 2000)
    camera.position.set(0, 0, 1000)
    camera.lookAt(0, 0, 0)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas })
    const material = new THREE.MeshStandardMaterial({
      color: 0xeefbff,
      roughness: 0.9,
      transparent: false,
      opacity: 0.8,
    })
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.2)
    directionalLight.position.set(-100, 160, 240)
    scene.add(ambientLight, directionalLight)

    const cloudGroups = cloudAnchors.map((anchor, index) => {
      const root = new THREE.Group()
      const { drift, boxGeometry } = createCloud(material, anchor.scale)
      root.add(drift)
      scene.add(root)

      gsap.to(drift.position, {
        delay: index * 0.25,
        duration: 7 + (index % 3) * 2,
        ease: 'sine.inOut',
        repeat: -1,
        x: index % 2 === 0 ? 24 : -24,
        yoyo: true,
      })

      return { anchor, boxGeometry, root }
    })

    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height, false)
      camera.left = -width / 2
      camera.right = width / 2
      camera.top = height / 2
      camera.bottom = -height / 2
      camera.updateProjectionMatrix()
    }

    const render = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollY = window.scrollY

      cloudGroups.forEach(({ anchor, root }) => {
        root.position.set(
          (anchor.x - 0.5) * width,
          height / 2 - anchor.y * documentHeight + scrollY,
          0,
        )
      })

      renderer.render(scene, camera)
    }

    const renderFrame = () => {
      render()
      frame = requestAnimationFrame(renderFrame)
    }

    let frame
    resize()
    renderFrame()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', render)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', render)
      cloudGroups.forEach(({ boxGeometry, root }) => {
        gsap.killTweensOf(root.children[0].position)
        root.removeFromParent()
        boxGeometry.dispose()
      })
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas className="cloud-layer" ref={canvasRef} aria-hidden="true" />
}

export default Clouds
