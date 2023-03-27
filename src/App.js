import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Form from './Pages/Form';
import StoreConfig from "./Pages/StoreConfig";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  return (
       <>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/form" element={<Form />} />
            <Route path="/storeConfig" element={<StoreConfig/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Services/>} />
          </Routes>
        </BrowserRouter>
      </>   
  );
}

export default App;
