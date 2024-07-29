import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import AddCustomer from './components/AddCustomer'
import CustomerList from './components/CustomerList'

function App() {
 
  return (
   <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/customers" element={<CustomerList/>}/>
        <Route path="/add-customer" element={<AddCustomer/>}/>
      </Routes>
    </div>
   </Router>
  )
}

export default App
