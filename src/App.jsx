import './App.scss'
import { Info } from './Components/Info/Info'
import { Menu } from './Components/Menu/Menu'
import { Partners } from './Components/Partners/Partners'
import { Header } from './Components/Header/Header'
import { What } from './Components/What/What'
import { Download } from './Components/Download/Download'
import { Footer } from './Components/Footer/Footer'


const App = () => {

  return (
    <div className="app">
        <Menu />
        <Header/>
        <What/>
        <Info/>
        <Partners/>
        <Download/>
        <Footer/>

        
    </div>

  )
}


export default App


// https://assistant.google.com/intl/es/
// https://assistant.google.com/intl/en_au/
