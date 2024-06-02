import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Pnf } from "./pages/pnf.tsx";
import { Home } from "./pages/home.tsx";
import { Hinapen } from "./pages/hinapen/hinapen.tsx";
import { Talk } from "./pages/hinapen/talk.tsx";
import { Zukan } from "./pages/hinapen/zukan.tsx";

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
          <Route path="/talk"element={<Talk />}/>
          <Route path="/zukan"element={<Zukan />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}