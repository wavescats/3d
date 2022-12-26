import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Hippo(props) {
  const { nodes, materials } = useGLTF("/hippo.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.03, 0.03]} rotation={[-0.15, 0, -0.03]}>
        <mesh
          geometry={nodes.Sphere_2.geometry}
          material={nodes.Sphere_2.material}
          position={[-0.26, 0.22, 0.19]}
          scale={[-0.17, 0.17, 0.17]}
        />
        <mesh
          geometry={nodes.Sphere_2_1.geometry}
          material={nodes.Sphere_2_1.material}
          position={[0.26, 0.22, 0.19]}
          scale={0.17}
        />
      </group>
      <directionalLight
        intensity={1}
        decay={2}
        color="#115ddd"
        position={[1.04, -1.53, -1.05]}
        rotation={[2.96, 0.49, -2.45]}
      />
      <directionalLight
        intensity={1}
        decay={2}
        color="#fee245"
        position={[-1, 2.26, 1.74]}
        rotation={[-1.16, -0.36, -0.23]}
      />
      <mesh
        geometry={nodes.mane.geometry}
        material={nodes.mane.material}
        position={[0, -0.39, 0.91]}
        rotation={[0.43, 0, 0]}
        scale={0.19}
      />
      <mesh
        geometry={nodes.float_head.geometry}
        material={nodes.float_head.material}
        position={[-0.18, -0.45, 0.85]}
        rotation={[-0.41, -0.28, 0.61]}
        scale={[-0.09, 0.23, 0.16]}
      />
      <mesh
        geometry={nodes.Cone.geometry}
        material={nodes.Cone.material}
        position={[0, -0.39, 1.1]}
        rotation={[0.48, 0, 0]}
        scale={[0.15, 0.38, 0.15]}
      />
      <mesh
        geometry={nodes.float.geometry}
        material={nodes.float.material}
        position={[0, -0.87, 0.04]}
        rotation={[0.3, 0, 0]}
        scale={1.29}
      />
      <mesh
        geometry={nodes.body.geometry}
        material={nodes.body.material}
        position={[0.59, -0.6, 0.05]}
        rotation={[-1.56, 0.62, -1.8]}
      />
      <mesh
        geometry={nodes.nails.geometry}
        material={nodes.nails.material}
        position={[0.8, -0.86, 0.32]}
        rotation={[1.44, -0.28, -1.5]}
        scale={[0.1, 0.09, 0.18]}
      />
    </group>
  );
}

useGLTF.preload("/hippo.glb");
