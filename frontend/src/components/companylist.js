import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiKey, baseUrl } from './config';

const CompanyList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pageNumber, setPageNumber] = useState(0); 
    const [pageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    const navigate = useNavigate();

    const companyDetails = (id) => {
        console.log("id", id);
        navigate(`/update_company/${id}`);
    };

    const apiCall = async (pageNumber) => {
        setLoading(true);
        try {
            const response = await axios.get(`${baseUrl}/list`, {
                params: {
                    apiKey: apiKey,
                    onlyMyRecords: false,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    sort: 'DESC',
                    sortField: 'createdOn'
                }
            });
            console.log("response", response);
            if (!response) {
                throw new Error(`Network response was not ok: ${response}`);
            }
            setUsers(response.data.data);
            const totalRecords = response?.data?.totalCount; 
            setTotalPages(Math.ceil(totalRecords / pageSize));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message || 'An error occurred');
        }
    };

    useEffect(() => {
        apiCall(pageNumber);
    }, [pageNumber]);

    const handlePreviousPage = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        }
    };

    const handleNextPage = () => {
        if (pageNumber < totalPages - 1) { 
            setPageNumber(pageNumber + 1);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='container'>
            <h3 style={{textAlign: "center", padding: "20px"}}>All Company List</h3>
            <div className="row">
                {users.map((item) => (
                    <div className="col-sm-6" key={item.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><strong>Name: </strong> {item.name}</h5>
                                <p className="card-text">ReferenceId: {item.reference}</p>
                                <p className="card-text">Employees: {item.employees}</p>
                                <p className="card-text">OwnerName: {item.ownerName}</p>
                                <p className="card-text">HeadOffice: {item.headOffice.name}</p>
                                <p className="card-text">City: {item.headOffice.address.city}</p>
                                <p className="card-text">Description: {item.description}</p>
                                <img src={item?.imageUrl} className="card-img-top" alt="..." />
                                <button onClick={() => companyDetails(item.id)} className="btn btn-primary">Company Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center mt-2">
                <button 
                    onClick={handlePreviousPage} 
                    className="btn btn-secondary mx-2"
                    disabled={pageNumber === 0}
                >
                    Previous
                </button>
                <button 
                    onClick={handleNextPage} 
                    className="btn btn-secondary mx-2"
                    disabled={pageNumber >= totalPages - 1}
                >
                    Next
                </button>
            </div>

            <div className="mt-3 text-center">
                <p>Page {pageNumber + 1} of {totalPages}</p>
            </div>
        </div>
    );
};

export default CompanyList;
