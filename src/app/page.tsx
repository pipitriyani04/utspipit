
import Hero from "./fonts/components/hero";
import Riwayatpendidikan from "./fonts/components/RiwayatPendidikan";
import Riwayatpekerjaan from "./fonts/components/RiwayatPekerjaan";
import "./pitry-style.css";
import Skills from "./fonts/components/skills";
import PersonalInfo from "./fonts/components/personalinfo";
import HobbiesGallery from "./fonts/components/hobbiesgalery";
import Contact from "./fonts/components/Contact";
export default  function CVonline() {
  return (
    <section>
    <Hero />
    <PersonalInfo />
    <Riwayatpendidikan />
    <Riwayatpekerjaan />
    <Skills />
    <HobbiesGallery />
    <Contact />
    </section>
  );
}