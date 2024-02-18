import AboutMe from "../AboutMe";
import EmailForm from "../EmailForm";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <EmailForm className="emailForm"/>
      <Footer />
    </>
  );
}
