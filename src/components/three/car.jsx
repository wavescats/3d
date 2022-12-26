import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Car(props) {
  const { nodes, materials } = useGLTF("/models/car/car.glb");
  return (
    <group {...props} dispose={null} scale={0.5} position={[-1, 0, 0]}>
      <group position={[0, 0.12, 0.27]} scale={0.02}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Main_Paint}
        />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Black} />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Indicators}
        />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Glass} />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.Tail_Lights}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.Mirrors}
        />
      </group>
      <group position={[0, 0.02, 0.31]} scale={0.09}>
        <mesh geometry={nodes.Object_14.geometry} material={materials.Tyres} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Tyres} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Tyres} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Tyres} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Rims} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Rims} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Black} />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.Hub_Lock}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/car/car.glb");
