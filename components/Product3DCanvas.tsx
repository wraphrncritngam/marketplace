'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function InteractiveMesh({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t / 2) / 2;
    meshRef.current.rotation.y = Math.sin(t / 3) / 2;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.2}>
        <torusKnotGeometry args={[0.5, 0.18, 128, 32]} />
        <MeshDistortMaterial color={color} speed={3} distort={0.4} radius={1} />
      </mesh>
    </Float>
  );
}

export default function Product3DCanvas({ color = '#3b82f6' }: { color?: string }) {
  return (
    <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden relative">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#818cf8" intensity={1} />
        <InteractiveMesh color={color} />
      </Canvas>
      <span className="absolute bottom-1 right-1 text-[8px] text-white/60 bg-black/40 px-1 rounded backdrop-blur">
        3D
      </span>
    </div>
  );
}