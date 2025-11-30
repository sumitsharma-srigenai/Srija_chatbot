import { Route, Routes } from "react-router";
import "./App.css";
import { NAVIGATION } from "./constants/navigation";
import LetMeKnowForm from "./pages/FiveStepsForm/LetMeKnowForm";
import PlanSelector from "./pages/FiveStepsForm/PlanSelector";
import SignUpForm from "./pages/FiveStepsForm/SignUpForm";
import TemplateSelector from "./pages/FiveStepsForm/TemplateSelector";
import LandingHero from "./pages/LandingHero";

function App() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24" />
      <Routes>
        <Route path={NAVIGATION.FIRST} element={<LandingHero />} />
        <Route path={NAVIGATION.SECOND} element={<LetMeKnowForm />} />
        <Route path={NAVIGATION.THIRD} element={<TemplateSelector />} />
        <Route path={NAVIGATION.FOURTH} element={<PlanSelector />} />
        <Route path={NAVIGATION.FIFTH} element={<SignUpForm />} />
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more protected routes here 
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
