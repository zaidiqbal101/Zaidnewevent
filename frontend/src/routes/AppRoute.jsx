import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import About from "../pages/aboutus"; 
import Gallery from "../pages/gallery";
import BlogPage from "../pages/BlogPage";
import BlogArticle1 from "../pages/blogarticle1";
import ContactPage from "../pages/ContactPage";
import WeddingDelhi from "../pages/weddingdelhi";
import WeddingNoida from "../pages/weddingnoida";
import WeddingGurgaon from "../pages/weddinggurgaon";
import Birthdaydelhi from "../pages/birthdaydelhi";
import Birthdaygurgaon from "../pages/birthdaygurgaon";
import Birthdaynoida from "../pages/birthdaynoida";
// import Anniversary from "../pages/servicesanniversary";
import ServicesAnniversary from "../pages/servicesanniversary";
import KittyParty from "../pages/kittyparty";
import BabyShower from "../pages/babyshower";
import RetirementParty from "../pages/retirementparty";
import ThemeParty from "../pages/ThemeParty";
import ReunionParty from "../pages/reunionparty";
import AlumuniMeet from "../pages/AlumuniMeet";
const AppRoute = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/aboutus" element={<About />} /> 
        <Route path="/gallery" element={<Gallery/>} /> 
        <Route path="/blogpage" element={<BlogPage/>} /> 
        <Route path="/blog/birthday-planner" element={<BlogArticle1 />} /> 
        <Route path="/blogPage" element={<BlogPage />} /> 
        <Route path="/ContactPage" element={<ContactPage />} /> 
        <Route path="/weddingdelhi" element={<WeddingDelhi />} />
        <Route path="/weddingnoida" element={<WeddingNoida />} />
        <Route path="/weddinggurgaon" element={<WeddingGurgaon />} />
        <Route path="/birthdaydelhi"  element={<Birthdaydelhi/>} /> 
        <Route path="/birthdaygurgaon"  element={<Birthdaygurgaon/>} /> 
        <Route path="/birthdaynoida" element={<Birthdaynoida/>}/>
        <Route path="/servicesanniversary" element={<ServicesAnniversary/>}/>
        <Route path="/kittyparty" element={<KittyParty/>}/>
        <Route path="/BabyShower" element={<BabyShower/>}/>
        <Route path="/RetirementParty" element={<RetirementParty/>}/>
        <Route path="/ThemeParty" element={<ThemeParty/>}/>
        <Route path="/ReunionParty" element={<ReunionParty/>}/>
        <Route path="/AlumuniMeet" element={<AlumuniMeet/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoute;
