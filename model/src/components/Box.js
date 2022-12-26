import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../images/bg.jpg";

function Box() {
  const colorMap = useLoader(TextureLoader, texture); // 사진을 재질로 입히기

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      {/* args = 높이, 깊이, 기타매개변수 */}

      <meshNormalMaterial attach="material" />
      {/* 기본적인 RGB 색상재질 */}

      {/* <meshStandardMaterial map={colorMap} /> */}
      {/* 사진을 재질로 입히기 */}

      {/* <meshLambertMaterial attach="material" color="blue" /> */}
    </mesh>
  );
}

export default Box;
