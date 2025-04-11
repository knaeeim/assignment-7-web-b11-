import './App.css'
import ActiveAuction from './components/ActiveAuction/ActiveAuction'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <ActiveAuction></ActiveAuction>
      <Footer></Footer>
    </>
  )
}

export default App
