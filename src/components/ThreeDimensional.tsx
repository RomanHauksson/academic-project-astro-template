// https://r3f.docs.pmnd.rs/tutorials/loading-models

import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import { Progress } from "@/components/ui/progress";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="w-[200px] flex flex-col gap-2 items-center">
        <Progress value={progress} className="w-full" />
        <p className="text-sm">Loading... {progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
}

export function ThreeDimensional({ filename }: { filename: string }) {
  function Scene() {
    const gltf = useLoader(GLTFLoader, `./${filename}`);
    return <primitive object={gltf.scene} />;
  }

  return (
    <div className="w-full h-96 bg-zinc-200 dark:bg-zinc-800 rounded-lg">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Scene />
          <OrbitControls />
          {/* Ambient light for overall brightness */}
          <ambientLight intensity={1.2} />
          {/* Main directional lights from different angles */}
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <directionalLight position={[-5, 5, -5]} intensity={1} />
          <directionalLight position={[0, -5, 0]} intensity={0.5} />
          {/* Hemisphere light for natural-looking illumination */}
          <hemisphereLight
            color="#ffffff"
            groundColor="#444444"
            intensity={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
