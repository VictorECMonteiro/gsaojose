import { BrowserRouter, Routes, Route} from "react-router";
import './App.css'
import Landing from './pages/Landing/Landing';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Produtos from "./pages/Produtos/Produtos";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/produtos" element={<Produtos />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
