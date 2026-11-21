import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import gsap from 'gsap'

const cloudModelUrl = new URL('../models/cloud_1.glb', import.meta.url).href

const cloudAnchors = [
  { x: 0.1, y: 0.03, scale: 1.4 },
  { x: 0.86, y: 0.2, scale: 2.4 },
  { x: 0.08, y: 0.42, scale: 0.65 },
  { x: 0.9, y: 0.6, scale: 0.9 },
  { x: 0.12, y: 0.67, scale: 0.72 },
  { x: 0.86, y: 0.9, scale: 1.5 },
  { x: 0.7, y: 0.9, scale: 2 },
]

function disposeModel(model) {
  const geometries = new Set()
  const materials = new Set()

  // Cloned cloud instances share these resources, so dispose each one only once.
  model.traverse(object => {
    if (!object.isMesh) return
    geometries.add(object.geometry)
    for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
      materials.add(material)
    }
  })

  geometries.forEach(geometry => geometry.dispose())
  materials.forEach(material => material.dispose())
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
    const cloudMaterial = new THREE.MeshStandardMaterial({
      color: 0xeefbff,
      roughness: 0.1,
      transparent: false,
      opacity: 0.8,
    })

    const ambientColor = 0xbbbbff
    const lightColor = 0xffffff
    const ambientLightIntensity = 1.8
    const directionalLightIntensity = 2.5

    const dirLightPosition = new THREE.Vector3(0, 200, 240)

    const ambientLight = new THREE.AmbientLight(ambientColor, ambientLightIntensity)
    const directionalLight = new THREE.DirectionalLight(lightColor, directionalLightIntensity)
    directionalLight.position.copy(dirLightPosition)
    scene.add(ambientLight, directionalLight)

    let cloudGroups = []
    let cloudModel
    let isDisposed = false

    const resize = () => {
      const width = document.documentElement.clientWidth
      const height = window.innerHeight
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height)
      camera.left = -width / 2
      camera.right = width / 2
      camera.top = height / 2
      camera.bottom = -height / 2
      camera.updateProjectionMatrix()
    }

    const render = () => {
      const width = document.documentElement.clientWidth
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

    new GLTFLoader().load(
      cloudModelUrl,
      gltf => {
        cloudModel = gltf.scene
        // The model can finish loading after the component has unmounted.
        if (isDisposed) {
          disposeModel(cloudModel)
          return
        }

        const bounds = new THREE.Box3().setFromObject(cloudModel)
        const size = bounds.getSize(new THREE.Vector3())
        const center = bounds.getCenter(new THREE.Vector3())

        cloudGroups = cloudAnchors.map((anchor, index) => {
          const root = new THREE.Group()
          const drift = new THREE.Group()
          const model = cloudModel.clone(true)
          model.position.sub(center)
          // The model's longest axis faces away from the camera in its original orientation.
          model.rotation.y = -(Math.PI / 2)
          // Fit each instance to its anchor while preserving the model's proportions.
          model.scale.setScalar((90 * anchor.scale) / size.z)
          model.traverse(object => {
            if (object.isMesh) object.material = cloudMaterial
          })
          drift.add(model)
          drift.rotation.set(-0.08, 0.12, 0)
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

          return { anchor, drift, root }
        })
      },
      undefined,
      error => {
        console.error('Failed to load cloud model:', error)
      },
    )

    return () => {
      isDisposed = true
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', render)
      cloudGroups.forEach(({ drift, root }) => {
        gsap.killTweensOf(drift.position)
        root.removeFromParent()
      })
      if (cloudModel) disposeModel(cloudModel)
      cloudMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas className="cloud-layer" ref={canvasRef} aria-hidden="true" />
}

export default Clouds
