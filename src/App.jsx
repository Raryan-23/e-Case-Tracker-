
import About from "./components/About"
import Accordion from "./components/Accordian"
import Banner from "./components/Banner"
import CaseFlow from "./components/CaseFlow"
import Card from "./components/Category"
import Feed from "./components/Feed"
import Footer from "./components/Footer"
import Footer_last from "./components/Footer_last"
import Nav from "./components/Nav"
import Vision from "./components/Vision"


function App() {

  return (
    <>
      <div className="overflow-x-hidden">
        <Nav />
        <div className="h-32"></div>
        <Banner />
        <About />
        <Vision />
        <Card />
        <Feed />
        <CaseFlow />
        <Accordion />
        <Footer />
        <Footer_last />
      </div>

    </>
  )
}

export default App
