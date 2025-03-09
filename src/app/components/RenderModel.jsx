"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";
import Brain from "../models/Brain"; // ✅ Import Brain inside RenderModel

const RenderModel = ({ className }) => {
  return (
    <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
      <Suspense fallback={null}>
        <Brain /> {/* ✅ Brain is inside Canvas */}
      </Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;


