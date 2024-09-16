import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

import DesireesBaby from "./stories/DesireesBaby";
import DroversWife from "./stories/DroversWife";
import HappyPrince from "./stories/HappyPrince";
import HitchHiker from "./stories/HitchHiker";
import LettersFromThailand from "./stories/LettersFromThailand";
import Necklace from "./stories/Necklace";
import NotPoorJustBroke from "./stories/NotPoorJustBroke";
import OliverTwist from "./stories/OliverTwist";
import Poison from "./stories/Poison";
import RomeoAndJuliet from "./stories/RomeoAndJuliet";
import StoryOfAnHour from "./stories/StoryOfAnHour";
import VillageByTheSea from "./stories/VillageByTheSea";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Story */}
          <Route path="DesireesBaby" element={<DesireesBaby />} />
          <Route path="DroversWife" element={<DroversWife />} />
          <Route path="HappyPrince" element={<HappyPrince />} />
          <Route path="HitchHiker" element={<HitchHiker />} />
          <Route path="LettersFromThailand" element={<LettersFromThailand />} />
          <Route path="Necklace" element={<Necklace />} />
          <Route path="NotPoorJustBroke" element={<NotPoorJustBroke />} />
          <Route path="OliverTwist" element={<OliverTwist />} />
          <Route path="Poison" element={<Poison />} />
          <Route path="RomeoAndJuliet" element={<RomeoAndJuliet />} />
          <Route path="StoryOfAnHour" element={<StoryOfAnHour />} />
          <Route path="VillageByTheSea" element={<VillageByTheSea />} />

          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);