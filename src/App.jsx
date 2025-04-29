import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import {HeroSection, AuthorUdemyShowcase, Cohorts, KeyBenefits, Alumni, SocialLoveSection, AppDownloadSection, YoutubeShowcase, CodeBackground, StudentsCompanyShowcase, MobileRevealSection, DevFaq, CloudTopics, CommunitySection} from './components/components/components'

import { Routes , Route } from 'react-router-dom'
function App() {

  return (
  
   <div className='bg-black px-10 overflow-x-hidden'>
    <Navbar/>
   <CodeBackground/>

<HeroSection/>
<AuthorUdemyShowcase/>
<Cohorts/>
<StudentsCompanyShowcase/>
<KeyBenefits/>
<CloudTopics/>
<Alumni/>
<MobileRevealSection/>
<SocialLoveSection/>
<AppDownloadSection/>
<YoutubeShowcase/>
<CommunitySection/>
<DevFaq/>

<Footer/>



<Routes>
    

    <Route to='/login' element={<HeroSection/>} />
   
</Routes>
   </div>

  )
}

export default App
