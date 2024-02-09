import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './Layout/Page';
import Customers from './Components/Organisms/Sections/Customers';
import Dashboard from './Components/Organisms/Sections/Dashboard';
import Stock from './Components/Organisms/Sections/Stock';
import Restaurant from './Components/Organisms/Sections/Restaurant';
import Design from './Components/Organisms/Sections/Design';
import Report from './Components/Organisms/Sections/Report';
import RoleAndAdmin from './Components/Organisms/Sections/RoleAndAdmin';
import Settings from './Components/Organisms/Sections/Settings';
import Supply from './Components/Organisms/Sections/Supply';
import Instock from './Components/Organisms/Sections/Instock';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Page>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/design" element={<Design />} />
            <Route path="/report" element={<Report />} />
            <Route path="/roleandadmin" element={<RoleAndAdmin />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/instock" element={<Instock />} />
            <Route path="/supply" element={<Supply />} />
          </Routes>
        </Page>
      </BrowserRouter>
    </div>
  );
}

export default App;
