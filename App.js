import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;