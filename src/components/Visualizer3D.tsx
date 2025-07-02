import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import { Planet } from './Planet';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Visualizer3D() {
  return (
    <Canvas style={{ height: '500px' }}>
      {/* 🌞 Strong sunlight as point light */}
      <pointLight position={[0, 0, 0]} intensity={3} distance={50} decay={2} />
      <ambientLight intensity={0.1} /> {/* lower ambient for shadows */}

      {/* ✨ Sun with glow */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          emissive="yellow"
          emissiveIntensity={5}
          color="yellow"
          metalness={0.4}
        />
      </mesh>

      {/* 🪐 Planets */}
      <Planet name="Mercury" distance={3} size={0.2} textureUrl="/textures/mercury.jpg" speed={0.02} />
      <Planet name="Venus" distance={5} size={0.4} textureUrl="/textures/venus.jpg" speed={0.015} />
      <Planet name="Earth" distance={7} size={0.5} textureUrl="/textures/earth.jpg" speed={0.012} />
      <Planet name="Mars" distance={9} size={0.4} textureUrl="/textures/mars.jpg" speed={0.01} />
      <Planet name="Jupiter" distance={12} size={1.1} textureUrl="/textures/jupiter.jpg" speed={0.007} />
      <Planet name="Saturn" distance={15} size={0.9} textureUrl="/textures/saturn.jpg" speed={0.005} />
      <Planet name="Uranus" distance={18} size={0.7} textureUrl="/textures/uranus.jpg" speed={0.003} />
<ambientLight intensity={0.2} />

      {/* 🌌 Deep starfield */}
      <Stars radius={200} depth={100} count={10000} factor={6} fade speed={1} />

      {/* 🏁 Subtle orbit rings */}
      {[3,5,7,9,12,15,18].map((distance) => (
        <Line
          key={distance}
          points={Array.from({ length: 100 }, (_, i) => {
            const angle = (i / 100) * Math.PI * 2;
            return [distance * Math.cos(angle), 0, distance * Math.sin(angle)];
          })}
          color="rgba(255, 255, 255, 0.15)" // subtle, semi-transparent
          lineWidth={0.2}
          dashed
        />
      ))}

      {/* 🎨 Bloom effect to make sun and shiny parts glow */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.9} intensity={1.2} />
      </EffectComposer>

      <OrbitControls enablePan={false} minDistance={10} maxDistance={50} />
    </Canvas>
  );
}
