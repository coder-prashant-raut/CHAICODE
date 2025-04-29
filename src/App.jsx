import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import {HeroSection, AuthorUdemyShowcase, Cohorts, KeyBenefits, Alumni, SocialLoveSection, AppDownloadSection, YoutubeShowcase, CodeBackground} from './components/components/components'
function App() {

  return (
  
   <div className='bg-black px-10 overflow-x-hidden'>
    
   <Navbar/>
   <CodeBackground/>

<HeroSection/>
<AuthorUdemyShowcase/>
<Cohorts/>
<KeyBenefits/>
<Alumni/>
<SocialLoveSection/>
<AppDownloadSection/>
<YoutubeShowcase/>

<Footer/>
   </div>

  )
}

export default App
