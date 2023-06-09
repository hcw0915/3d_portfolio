import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload, Stars } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const StarsSky = (props) => {
  const ref = useRef()

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  console.log('asd', ref)
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
      <PointMaterial
        transparent
        color="#f373c8"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarsSky />

          {/* <Stars /> */}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
