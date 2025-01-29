import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Helper function to format the date as YYYY-MM-DD
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const localDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    return localDate.toISOString().split('T')[0];
};

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [company, setCompany] = useState('');
    const [model, setModel] = useState('');
    const [size, setSize] = useState('');
    const [waterProof, setWaterProof] = useState(false);
    const [shape, setShape] = useState('');
    const [price, setPrice] = useState(0.0);
    const [color, setColor] = useState('');
    const [warrantyStart, setWarrantyStart] = useState('');
    const [warrantyEnd, setWarrantyEnd] = useState('');

    useEffect(() => {
        // Fetch the fan details when the component mounts
        axios.get(`http://localhost:8080/singlefan/${id}`)
            .then(res => {
                const fan = res.data;
                setCompany(fan.Company);
                setModel(fan.Model);
                setSize(fan.Size);
                setWaterProof(fan.WaterProof);
                setShape(fan.Shape);
                setPrice(fan.Price);
                setColor(fan.Color);
                setWarrantyStart(formatDate(fan.WarrantyStart));
                setWarrantyEnd(formatDate(fan.WarrantyEnd));
            })
            .catch(err => console.log(err));
    }, [id]);

    function handleSubmit(e) {
        e.preventDefault();
        // Send the updated fan details to the backend
        axios.put(`http://localhost:8080/updateproduct/${id}`, {
            Company: company,
            Model: model,
            Size: size,
            WaterProof: waterProof,
            Shape: shape,
            Price: parseFloat(price), // Ensure the price is a float
            Color: color,
            WarrantyStart: warrantyStart,
            WarrantyEnd: warrantyEnd,
        })
        .then(res => {
            console.log(res);
            navigate('/'); // Redirect after update
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-4">
                <form onSubmit={handleSubmit}>
                    <h2 className="bg-white text-center">Update Fan</h2>

                    {/* Company Input */}
                    <div className="mb-2">
                        <label htmlFor="company" className="form-label">Company</label>
                        <input
                            type="text"
                            id="company"
                            placeholder="Enter Company"
                            className="form-control"
                            value={company}
                            onChange={e => setCompany(e.target.value)}
                        />
                    </div>

                    {/* Model Input */}
                    <div className="mb-2">
                        <label htmlFor="model" className="form-label">Model</label>
                        <input
                            type="text"
                            id="model"
                            placeholder="Enter Model"
                            className="form-control"
                            value={model}
                            onChange={e => setModel(e.target.value)}
                        />
                    </div>

                    {/* Size Input */}
                    <div className="mb-2">
                        <label htmlFor="size" className="form-label">Size</label>
                        <input
                            type="text"
                            id="size"
                            placeholder="Enter Size"
                            className="form-control"
                            value={size}
                            onChange={e => setSize(e.target.value)}
                        />
                    </div>

                    {/* WaterProof Checkbox */}
                    <div className="mb-2">
                        <label htmlFor="waterProof" className="form-label">Waterproof</label>
                        <input
                            type="checkbox"
                            id="waterProof"
                            checked={waterProof}
                            onChange={e => setWaterProof(e.target.checked)}
                        />
                    </div>

                    {/* Shape Input */}
                    <div className="mb-2">
                        <label htmlFor="shape" className="form-label">Shape</label>
                        <input
                            type="text"
                            id="shape"
                            placeholder="Enter Shape"
                            className="form-control"
                            value={shape}
                            onChange={e => setShape(e.target.value)}
                        />
                    </div>

                    {/* Price Input */}
                    <div className="mb-2">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            id="price"
                            placeholder="Enter Price"
                            className="form-control"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    {/* Color Input */}
                    <div className="mb-2">
                        <label htmlFor="color" className="form-label">Color</label>
                        <input
                            type="text"
                            id="color"
                            placeholder="Enter Color"
                            className="form-control"
                            value={color}
                            onChange={e => setColor(e.target.value)}
                        />
                    </div>

                    {/* Warranty Start Date Input */}
                    <div className="mb-2">
                        <label htmlFor="warrantyStart" className="form-label">Warranty Start</label>
                        <input
                            type="date"
                            id="warrantyStart"
                            className="form-control"
                            value={warrantyStart}
                            onChange={e => setWarrantyStart(e.target.value)}
                        />
                    </div>

                    {/* Warranty End Date Input */}
                    <div className="mb-2">
                        <label htmlFor="warrantyEnd" className="form-label">Warranty End</label>
                        <input
                            type="date"
                            id="warrantyEnd"
                            className="form-control"
                            value={warrantyEnd}
                            onChange={e => setWarrantyEnd(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Update Fan</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateProduct;
