'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function FloatingShapes() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.08
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08
  })

  const shapes = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 4,
        ] as [number, number, number],
        scale: 0.25 + Math.random() * 0.55,
        type: index % 3,
      })),
    []
  )

  return (
    <group ref={group}>
      {shapes.map((shape, index) => (
        <Float key={index} speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
          <mesh position={shape.position} scale={shape.scale}>
            {shape.type === 0 ? (
              <icosahedronGeometry args={[1, 0]} />
            ) : shape.type === 1 ? (
              <octahedronGeometry args={[1, 0]} />
            ) : (
              <torusKnotGeometry args={[0.45, 0.12, 96, 12]} />
            )}
            <meshStandardMaterial
              color={index % 2 === 0 ? '#60a5fa' : '#a855f7'}
              metalness={0.65}
              roughness={0.25}
              transparent
              opacity={0.75}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const count = 900
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      array[i * 3] = (Math.random() - 0.5) * 18
      array[i * 3 + 1] = (Math.random() - 0.5) * 12
      array[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return array
  }, [])

  useFrame((state) => {
    if (!points.current) return
    points.current.rotation.y = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#93c5fd" transparent opacity={0.8} />
    </points>
  )
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={['#030712']} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 4, 2]} intensity={1.1} color="#60a5fa" />
      <pointLight position={[-4, -2, 3]} intensity={0.8} color="#a855f7" />
      <Stars radius={80} depth={40} count={1800} factor={3} saturation={0} fade speed={0.6} />
      <ParticleField />
      <FloatingShapes />
    </Canvas>
  )
}
