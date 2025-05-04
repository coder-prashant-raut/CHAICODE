import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import {
  HeroSection,
  AuthorUdemyShowcase,
  Cohorts,
  KeyBenefits,
  Alumni,
  SocialLoveSection,
  AppDownloadSection,
  YoutubeShowcase,
  CodeBackground,
  StudentsCompanyShowcase,
  MobileRevealSection,
  DevFaq,
  CloudTopics,
  CommunitySection,
  FreeAPIShowcase,
  GradientDivider,
} from "./components/components/components";

// Import your new pages
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="w-full max-w-screen bg-black text-white overflow-x-hidden flex flex-col justify-center items-center">
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <div className="w-full max-w-full lg:max-w-7xl">
                <CodeBackground />
                <HeroSection />

                <GradientDivider />

                <div id="reviews">
                  <SocialLoveSection />
                </div>
                <GradientDivider />

                <StudentsCompanyShowcase />
                <GradientDivider />

                <div id="cohort">
                  <Cohorts />
                </div>
                <GradientDivider />

                <div id="udemy">
                  <AuthorUdemyShowcase />
                </div>

                <GradientDivider />

                <KeyBenefits />
                <GradientDivider />

                <CloudTopics />
                <GradientDivider />

                <Alumni />
                <GradientDivider />

                <MobileRevealSection />
                <GradientDivider />

                <CommunitySection />
                <GradientDivider />

                <YoutubeShowcase />
                <GradientDivider />

                <div id="docs">
                  <FreeAPIShowcase />
                </div>
                <GradientDivider />

                <AppDownloadSection />
                <GradientDivider />

                <DevFaq />
                <GradientDivider />
              </div>

              <Footer />
            </>
          }
        />

        {/* Login Route */}
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <LoginPage />
              <Footer />
            </>
          }
        />

        {/* 404 - Page Not Found */}
        <Route
          path="*"
          element={
            <>
              <NotFoundPage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
