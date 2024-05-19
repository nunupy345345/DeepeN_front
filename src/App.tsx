import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Pnf } from "./pages/pnf.tsx";
import { Home } from "./pages/home";
import { Hinapen } from "./pages/hinapen.tsx";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ul>
        </ul>
        <Routes>
          <Route path="*"element={<Pnf />}/>
          <Route path="/"element={<Home />}/>
          <Route path="/hinapen"element={<Hinapen />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}