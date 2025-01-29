import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    const [company, setCompany] = useState('');
    const [model, setModel] = useState('');
    const [size, setSize] = useState('');
    const [waterProof, setWaterProof] = useState(false);
    const [shape, setShape] = useState('');
    const [price, setPrice] = useState(0.0);
    const [color, setColor] = useState('');
    const [warrantyStart, setWarrantyStart] = useState('');
    const [warrantyEnd, setWarrantyEnd] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/addprd", {
            Company: company,
            Model: model,
            Size: size,
            WaterProof: waterProof,
            Shape: shape,
            Price: parseFloat(price),
            Color: color,
            WarrantyStart: warrantyStart,
            WarrantyEnd: warrantyEnd,
        })
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
            <div className="w-50 bg-white rounded shadow-lg p-5">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="company" className="form-label">Company</label>
                        <input
                            type="text"
                            id="company"
                            placeholder="Enter company name"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="model" className="form-label">Model</label>
                        <input
                            type="text"
                            id="model"
                            placeholder="Enter model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="size" className="form-label">Size</label>
                        <input
                            type="text"
                            id="size"
                            placeholder="Enter size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            id="waterProof"
                            className="form-check-input"
                            checked={waterProof}
                            onChange={(e) => setWaterProof(e.target.checked)}
                        />
                        <label htmlFor="waterProof" className="form-check-label">WaterProof</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="shape" className="form-label">Shape</label>
                        <input
                            type="text"
                            id="shape"
                            placeholder="Enter shape"
                            value={shape}
                            onChange={(e) => setShape(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            id="price"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="color" className="form-label">Color</label>
                        <input
                            type="text"
                            id="color"
                            placeholder="Enter color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="warrantyStart" className="form-label">Warranty Start</label>
                        <input
                            type="date"
                            id="warrantyStart"
                            value={warrantyStart}
                            onChange={(e) => setWarrantyStart(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="warrantyEnd" className="form-label">Warranty End</label>
                        <input
                            type="date"
                            id="warrantyEnd"
                            value={warrantyEnd}
                            onChange={(e) => setWarrantyEnd(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Add Product</button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
