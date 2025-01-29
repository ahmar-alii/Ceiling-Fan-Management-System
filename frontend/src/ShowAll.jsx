import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

// Helper function to format the date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // '2024-12-30'
};

function ShowAll() {
    const [fans, setFans] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/")
            .then(res => setFans(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/deletefan/${id}`);
            setFans(fans.filter(fan => fan.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-70 bg-white rounded">
                <Link to="/addprd" className="btn btn-success mb-2">Add Fan</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Company</th>
                            <th>Model</th>
                            <th>Size</th>
                            <th>WaterProof</th>
                            <th>Shape</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Warranty Start</th>
                            <th>Warranty End</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fans.map(fan => (
                                <tr key={fan.id}>
                                    <td>{fan.id}</td>
                                    <td>{fan.Company}</td>
                                    <td>{fan.Model}</td>
                                    <td>{fan.Size}</td>
                                    <td>{fan.WaterProof ? "Yes" : "No"}</td>
                                    <td>{fan.Shape}</td>
                                    <td>{fan.Price}</td>
                                    <td>{fan.Color}</td>
                                    <td>{formatDate(fan.WarrantyStart)}</td>
                                    <td>{formatDate(fan.WarrantyEnd)}</td>
                                    <td>
                                        <Link to={`/updateproduct/${fan.id}`} className="btn btn-primary">Update</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(fan.id)} className="btn btn-danger ms-2">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowAll;
