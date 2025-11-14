import { useGLTF } from "@react-three/drei";

export default function Girl() {
  const glb = useGLTF("/models/girl.glb"); // <-- CHECK PATH CAREFULLY

  return (
    <primitive object={glb.scene} scale={1.6} position={[0, -1, 0]} />
  );
}
