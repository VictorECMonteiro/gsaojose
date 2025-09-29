import { BrowserRouter, Routes, Route} from "react-router";
import './App.css'
import Landing from './pages/Landing/Landing';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
