"use client";
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

const Brain = (props) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/brain_hologram/scene-transformed.glb");
  const { actions } = useAnimations(animations, group);

  // Store smoothed mouse movement
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (group.current) {
      group.current.position.set(0, 2, 0); // Moves brain up slightly
    }
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play(); // Play first animation if available
    }
  }, [actions]);

  // Smooth rotation based on mouse movement
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += 0.002; // Auto-rotate speed
      group.current.position.y = -0.5 + Math.sin(state.clock.elapsedTime) * 0.05;

      // Smooth interpolation for better feel
      group.current.rotation.x += (mouseRef.current.y * 0.0001 - group.current.rotation.x) * 0.1;
      group.current.rotation.y += (mouseRef.current.x * 0.0001 - group.current.rotation.y) * 0.1;
    }
  });

  // Mouse movement event listener (optimized)
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current.x = event.clientX - window.innerWidth / 2;
      mouseRef.current.y = event.clientY - window.innerHeight / 2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <group ref={group} {...props} dispose={null} position={[0, 3, 0]} scale={[3, 3, 3]} rotation={[0.2, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
};

export default Brain;

