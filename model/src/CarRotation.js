import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Car from "./Car";

export default function CarRotation() {
  const carRef = useRef(null);

  useFrame(() => {
    if (carRef.current) {
      carRef.current.rotation.y += 0.001;
    }
  });

  return <Car ref={carRef} />;
}
