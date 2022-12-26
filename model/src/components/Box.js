import React from "react";

function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      {/* args = 높이, 깊이, 기타매개변수 */}
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

export default Box;
