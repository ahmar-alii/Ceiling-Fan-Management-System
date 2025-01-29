import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowAll from './ShowAll.jsx';
import AddProduct from './AddProduct.jsx'; // Adjusted the import path to match your file structure
import UpdateProduct from './UpdateProduct.jsx'; // Adjusted the import path to match your file structure

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ShowAll />} />
            <Route path="/addprd" element={<AddProduct />} />
            <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        </Routes>
    </BrowserRouter>
);
