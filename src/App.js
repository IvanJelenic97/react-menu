import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kooperanti from "./pages/Kooperanti";
import Gradilista from "./pages/Gradilista";
import Financije from "./pages/Financije";
import Tvrtka from "./pages/Tvrtka";
import Zaposlenici from "./pages/Zaposlenici";
import Izvjestaji from "./pages/Izvjestaji";
import MojaFirma from "./pages/MojaFirma";
import Resursi from "./pages/Resursi";
import Vozila from "./pages/Vozila";
import Strojevi from "./pages/Strojevi";
import NoviZadatak from "./NoviZadatak/NoviZadatak";
import Zadatak from "./Zadatak/Zadatak";
import Sidebar from "./components/Sidebar";
import NovoGradiliste from "./pages/NovoGradiliste";
import Voditelji from "./pages/Voditelji";
import Dokumentacija from "./pages/Dokumentacija";
import NazivGradilista from "./naziv-gradilista/NazivGradilista";
import RadniZadaci from "./RadniZadaci/RadniZadaci";
import RadniSati from "./RadniSati/RadniSati";
import Nacrti from "./Nacrti/Nacrti";
import Dokumenti from "./Dokumenti/Dokumenti";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Resursi />} />
          <Route path="resursi" element={<Resursi />} />
          <Route path="vozila" element={<Vozila />} />
          <Route path="strojevi" element={<Strojevi />} />
          <Route path="kooperanti" element={<Kooperanti />} />
          <Route path="gradilista" element={<Gradilista />} />
          <Route path="/novo-gradiliste" element={<NovoGradiliste />} />
          <Route path="/naziv-gradilista" element={<NazivGradilista />} />
          <Route path="/RadniZadaci" element={<RadniZadaci />} />
          <Route path="/NoviZadatak" element={<NoviZadatak />} />
          <Route path="/Zadatak" element={<Zadatak />} />
          <Route path="/Nacrti" element={<Nacrti />} />
          <Route path="/Dokumenti" element={<Dokumenti />} />
          <Route path="/RadniSati" element={<RadniSati />} />
          <Route path="/voditelji" element={<Voditelji />} />
          <Route path="/dokumentacija" element={<Dokumentacija />} />
          <Route path="financije" element={<Financije />} />
          <Route path="tvrtka" element={<Tvrtka />} />
          <Route path="Zaposlenici" element={<Zaposlenici />} />
          <Route path="izvjestaji" element={<Izvjestaji />} />
          <Route path="mojaFirma" element={<MojaFirma />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
