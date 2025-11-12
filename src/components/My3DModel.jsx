import { useGLTF } from "@react-three/drei";

export default function My3DModel() {
  // Yeh path tumhare public/models/model.glb file ka hai
  const { scene } = useGLTF("/models/model.glb");
  return <primitive object={scene} scale={2.2} position={[0.8, -0.1, 0]} />;

 
}
