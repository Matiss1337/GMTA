import '../src/css/App.css'
import { Nav } from './components/Nav'
import { Banner } from './components/Banner'
import { Partners } from './components/Partners'
import { ServicesBanner } from './components/ServicesBanner'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { ContactForm } from './components/ContactForm'

function App() {


  return (
    <div className="App">
<Nav/>
<Banner/>
<Partners/>
<ServicesBanner/>
<Services/>
<Team/>
<ContactForm/>
    </div>
  )
}

export default App
