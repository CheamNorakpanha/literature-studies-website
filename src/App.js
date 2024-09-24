import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import DesireesBaby from './storypages/DesireesBaby';
import DroversWife from './storypages/DroversWife';
import HappyPrince from './storypages/HappyPrince';
import HitchHiker from './storypages/HitchHiker';
import LettersFromThailand from './storypages/LettersFromThailand';
import Necklace from './storypages/Necklace';
import NotPoorJustBroke from './storypages/NotPoorJustBroke';
import OliverTwist from './storypages/OliverTwist';
import Poison from './storypages/Poison';
import RomeoAndJuliet from './storypages/RomeoAndJuliet';
import StoryOfAnHour from './storypages/StoryOfAnHour';
import VillageByTheSea from './storypages/VillageByTheSea';
import ScrollToTop from './hooks/ScrollToTop';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Route>
        <Route path="/home" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />

        {/* Story */}
        <Route path="/DesireesBaby" element={DesireesBaby} />
        <Route path="/DroversWife" element={DroversWife} />
        <Route path="/HappyPrince" element={HappyPrince} />
        <Route path="/HitchHiker" element={HitchHiker} />
        <Route path="/LettersFromThailand" element={LettersFromThailand} />
        <Route path="/Necklace" element={Necklace} />
        <Route path="/NotPoorJustBroke" element={NotPoorJustBroke} />
        <Route path="/OliverTwist" element={OliverTwist} />
        <Route path="/Poison" element={Poison} />
        <Route path="/RomeoAndJuliet" element={RomeoAndJuliet} />
        <Route path="/StoryOfAnHour" element={StoryOfAnHour} />
        <Route path="/VillageByTheSea" element={VillageByTheSea} />
        {/* Story */}

        <Route path="*" element={NoPage} /> 
      </Route>
      <ScrollToTop />
    </Router>
  );
};

export default App;
