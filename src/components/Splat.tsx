import { Canvas } from "@react-three/fiber";
import { Splat, OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";

const Roman = () => {
  // The position of the user's mouse on the screen, as a fraction of screen width or height
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const xPercentage = clientX / innerWidth;
      const yPercentage = clientY / innerHeight;

      setMousePosition({ x: xPercentage, y: yPercentage });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-zinc-300 h-[20rem] w-full rounded-lg">
      <Canvas camera={{ position: [0, 0, 0], rotation: [0, 0, 0] }}>
        <Splat
          src="https://roman.technology/Roman.splat"
          position={[0.3, -0.43, -1.74]}
          rotation={[
            0.15 + mousePosition.y * 0.4,
            -0.2 + mousePosition.x * 0.4,
            0,
          ]}
        />
      </Canvas>
    </div>
  );
};

export default Roman;
