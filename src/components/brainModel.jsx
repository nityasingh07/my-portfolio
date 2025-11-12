import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function BrainModel(props) {
  const group = useRef();
  const { scene } = useGLTF("/models/brain.glb"); // 👈 apni .glb file ka path

  // Optional: Slow rotation animation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={group} object={scene} scale={1.5} {...props} />;
}
