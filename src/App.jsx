
import './App.css'
import Banner from './Components/Home/Banner/Banner'
import Footer from './Components/Home/Footer/Footer'
import Navbar from './Components/Home/Navbar/Navbar'
import Task from './Components/Home/Task/Task'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
     <div className="body-parts p-5 lg:p-15 bg-[#ebf0f5]">
          <Task></Task>
     </div>
     <Footer></Footer>
    </>
  )
}

export default App
