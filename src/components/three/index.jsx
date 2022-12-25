import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadians } from "../../utils/angle";
import * as THREE from "three";

export default function Three() {
  const OrbitControlsRef = useRef(null);

  useFrame(e => {
    if (OrbitControlsRef.current) {
      const { x, y } = e.mouse;
      // x축 제어
      OrbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));

      // y축 제어
      OrbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));

      // 업데이트
      OrbitControlsRef.current.update();
    }
  });
  useEffect(() => {
    if (OrbitControlsRef.current) {
      console.log(OrbitControlsRef.current);
    }
  }, [OrbitControlsRef.current]);
  return (
    <>
      {/* 카메라 */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />

      {/* 카메라 컨트롤 */}
      <OrbitControls
        ref={OrbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
      />

      {/* 공 */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.5} />
      </mesh>

      {/* 평면 */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* 라이트 */}
      <ambientLight args={["#ffffff", 0.25]} />

      {/* 그림자 */}
      <spotLight
        args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />

      {/* 배경 환경설정 */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#2266cc" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}
