
import Box from "./compontes/box";
import { NavbarSimple } from "./compontes/navabr";
import HeroSection from "./pages/home";

export default function App() {
  return (
   <div>
     <div className="mb-10">
     <NavbarSimple/>
     </div>

      <div className="mb-10">
      <HeroSection/>
      </div>

      <Box/>
   </div>
  );
}
