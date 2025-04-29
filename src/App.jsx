import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
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
  FreeAPIShowcase
} from './components/components/components'

// Import your new pages
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="w-full max-w-screen bg-black text-white overflow-x-hidden">
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <CodeBackground />
              <HeroSection />

<div id='udemy'>
              <AuthorUdemyShowcase />
</div> 
<div id='cohort'>

              <Cohorts />
</div>
              <StudentsCompanyShowcase />
              <KeyBenefits />
              <CloudTopics />
              <Alumni />
              <MobileRevealSection />
  
<div id='reviews'> 
              <SocialLoveSection />
</div>

              <YoutubeShowcase />
              <FreeAPIShowcase/>
              <CommunitySection />
              <AppDownloadSection />
              <DevFaq />
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
  )
}

export default App
