import { FooterComponent } from "./components/FooterComponent"
import MainComponent from "./components/MainComponent"
import { NavbarComponent } from "./components/NavbarComponent"


function App() {

  return (
    <>
    <NavbarComponent/>
    <div className="my-10">
      <MainComponent/>
    </div>
    <FooterComponent/>
    </>
  )
}

export default App
