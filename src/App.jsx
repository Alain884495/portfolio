import Herobanner from "./components/Herobanner";
import Arsenals from "./components/Arsenals";
import Toolsmodel from "./components/Toolsmodel";
import AcademicCareer from "./components/AcademicCareer";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Herobanner />
      <Arsenals />
      <Toolsmodel />
      <AcademicCareer />
      <ProfessionalExperience />
      <Footer />
    </div>
  );
}

export default App;
