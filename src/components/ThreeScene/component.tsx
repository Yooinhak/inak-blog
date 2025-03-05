'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

const Model = () => {
  const { scene } = useGLTF('/models/simple_table.gltf');

  return <primitive object={scene} scale={1} />;
};

export const Component = () => {
  return (
    <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Component;
