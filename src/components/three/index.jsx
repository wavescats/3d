import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadians } from "../../utils/angle";

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
      <OrbitControls ref={OrbitControlsRef} />

      {/* 공 */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* 평면 */}
      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* 라이트 */}
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
}
