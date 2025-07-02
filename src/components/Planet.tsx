import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';


export function Planet({
  name,
  distance,
  size,
  textureUrl,
  speed,
}: {
  name: string;
  distance: number;
  size: number;
  textureUrl: string;
  speed: number;   // orbit speed
}) {
  const texture = useLoader(TextureLoader, textureUrl);
  const ref = useRef<THREE.Mesh>(null!);
  const angleRef = useRef(0);

  useFrame(() => {
    angleRef.current += speed;
    const x = distance * Math.cos(angleRef.current);
    const z = distance * Math.sin(angleRef.current);
    ref.current.position.set(x, 0, z);
    ref.current.rotation.y += 0.002;
  });

  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
  map={texture}
  emissive={name === "Earth" ? "#1e90ff" : "#444"}  // bluish emissive for Earth, grey for others
  emissiveIntensity={0.15}
  metalness={0.4}
  roughness={0.4}
/>

      </mesh>
      <Text position={[distance, size + 0.4, 0]} fontSize={0.3}>
        {name}
      </Text>
    </>
  );
}
