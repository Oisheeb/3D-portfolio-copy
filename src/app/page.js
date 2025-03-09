import Image from "next/image";
import RenderModel from "./components/RenderModel";
import Navigation from "./components/Navigation";
import Brain from "./components/models/brain"; // Ensure lowercase "brain"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image 
        src="/background/neural-background.jpeg"
        alt="background-image"
        fill
        style={{ objectFit: "cover" }} 
        className="opacity-65"
      />

      <div className="w-full h-screen">
        {/* Navigation and 3D Model */}
        <Navigation />
        <RenderModel /> {/* ✅ RenderModel already includes Brain */}
      </div>
    </main>
  );
}
