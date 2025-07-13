import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function Model({ glbPath, selectedColors }) {
  const { scene, materials } = useGLTF(glbPath);

  useEffect(() => {
    if (!materials) return;

    if (materials.Frame) materials.Frame.color.set(selectedColors.frame);
    if (materials.Frame_Guards) materials.Frame_Guards.color.set(selectedColors.frame);
    if (materials.Seat_Post) materials.Seat_Post.color.set(selectedColors.seat);
    if (materials.Tires_Side) materials.Tires_Side.color.set(selectedColors.tiresInner);
    if (materials.Tires_Bump) materials.Tires_Bump.color.set(selectedColors.tiresInner);
    if (materials.Handle_Bars) materials.Handle_Bars.color.set(selectedColors.handlebar);
    if (materials.Brakes) materials.Brakes.color.set(selectedColors.brakes);
    if (materials.Chain) materials.Chain.color.set(selectedColors.chain);
  }, [materials, selectedColors]);

  return <primitive object={scene} />;
}

export default function BikeModel({ glbPath, selectedColors }) {
  return (
    <Canvas shadows camera={{ position: [2, 2, 3], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <Suspense fallback={null}>
        <Model glbPath={glbPath} selectedColors={selectedColors} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
}
