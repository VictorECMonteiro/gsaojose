import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Quemsomos from "./pages/Quemsomos/Quemsomos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Produtos from "./pages/Produtos/Produtos";
import Receita from "./pages/Receita/Receita";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quemsomos" element={<Quemsomos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/receitas/:slug" element={<Receita />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
