import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Quemsomos from "./pages/Quemsomos/Quemsomos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Produtos from "./pages/Produtos/Produtos";
import Receita from "./pages/Receita/Receita";
import Receitas from "./pages/Receitas/Receitas";
import Privacidade from "./pages/Privacidade/Privacidade";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quemsomos" element={<Quemsomos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/receita/:slug" element={<Receita />} />
            <Route path="/receitas" element={<Receitas />} />
            <Route path="/privacidade" element={<Privacidade />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
