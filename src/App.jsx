import Pricepage from "./page/Pricepage"
import Rentpage from "./page/Rentpage"
import Mainpage from "./page/mainpage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Termpage from "./page/termpage"
import Board from "./page/Board"

function App() {
  return (
    <>
      
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/price" element={<Pricepage />} />
            <Route path="/rent" element={<Rentpage />} />
            <Route path="/board" element={<Board />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
