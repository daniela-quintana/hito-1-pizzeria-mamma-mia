import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
// import Register from './components/Register'
// import Login from './components/Login'
import Cart from './components/Cart'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<Cart />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App