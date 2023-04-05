

import './App.css'
import Dashbord from './Components/Dashboard/Dashbord'
import Navbar from './Components/Navbar/Navbar'
import PriceList from './Components/PriceList/PriceList'


function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashbord></Dashbord>
    </div>
  )
}

export default App
