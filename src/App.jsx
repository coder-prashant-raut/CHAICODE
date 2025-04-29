import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import {HeroSection, AuthorUdemyShowcase, Cohorts, KeyBenefits, Alumni, SocialLoveSection, AppDownloadSection, YoutubeShowcase} from './components/components/components'
function App() {

  return (
   <>
   <Navbar/>

    <HeroSection/>
    <AuthorUdemyShowcase/>
    <Cohorts/>
    <KeyBenefits/>
    <Alumni/>
    <SocialLoveSection/>
    <AppDownloadSection/>
    <YoutubeShowcase/>

   <Footer/>
   </>
  )
}

export default App
