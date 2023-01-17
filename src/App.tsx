import '../src/css/App.css'
import { Nav } from './components/Nav'
import { Banner } from './components/Banner'
import { Partners } from './components/Partners'
import { ServicesBanner } from './components/ServicesBanner'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { ContactForm } from './components/ContactForm'
import { AffiliateProgramme } from './components/AffiliateProgramme'
import { Footer } from './components/Footer'

function App() {


  return (
    <div className="App">
      <div className="Main">
<Nav/>
<Banner/>
<Partners/>
<ServicesBanner/>
<Services/>
<Team/>
<ContactForm/>
<AffiliateProgramme/>
</div>
<Footer/>
    </div>
  )
}

export default App
