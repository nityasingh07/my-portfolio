import { useGLTF, Center } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Girl() {
  const { scene } = useGLTF("/models/girl.glb");

  const modelRef = useRef();
  const [startAnim, setStartAnim] = useState(false);
  const [stopAnim, setStopAnim] = useState(false);

  // Start animation only AFTER the GLB loads
  useEffect(() => {
    if (scene) {
      setTimeout(() => setStartAnim(true), 300);
    }
  }, [scene]);

  // Rotation animation
  useFrame(() => {
    if (!startAnim || stopAnim || !modelRef.current) return;

    modelRef.current.rotation.y += 0.03;

    // Stop when facing front
    if (modelRef.current.rotation.y >= Math.PI * 2) {
      modelRef.current.rotation.y = 0;
      setStopAnim(true);
    }
  });

  return (
    <Center position={[1.5, -0.2, 0]}>
      <primitive
        ref={modelRef}
        object={scene}
        scale={1.6}
        rotation={[0, Math.PI / 1.5, 0]} // Start at a side angle
      />
    </Center>
  );
}
