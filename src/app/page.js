import Image from "next/image";
import RenderModel from "./components/RenderModel";
import Brain from "./components/models/brain";
import Navigation from "./components/Navigation";  


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image 
  src="/background/neural-background.jpeg"
  alt="background-image"
  fill // ✅ New Next.js 13+ syntax
  style={{ objectFit: "cover" }} // ✅ Updated syntax
  className="opacity-65"
/>


      <div className="w-full h-screen">
        {/* navigation and 3d model component */ }
        <Navigation />
        <RenderModel>
          <Brain />
        </RenderModel>
      </div>
    </main>
  );
}
