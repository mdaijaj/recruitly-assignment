import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiKey, baseUrl } from "./config";

const AddCompany = () => {
  const [company, setCompany] = useState({
    email: "",
    employees: "",
    faxNo: "",
    headOffice: {
      address: {
        addressLine: "",
        cityName: "",
        countryCode: "",
        countryName: "",
        postCode: "",
      },
    },
    imageUrl: "",
    name: "",
    ownerId: "",
    ownerName: "",
    rating: 0,
    reference: "",
  });

  const navigate= useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevState) => ({
      ...prevState,
      headOffice: {
        ...prevState.headOffice,
        address: {
          ...prevState.headOffice.address,
          [name]: value,
        },
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}?apiKey=${apiKey}`, company)
      .then((response) => {
        console.log("Company added successfully", response.data);
        navigate('/')
      })
      .catch((error) => {
        console.error("There was an error adding the company!", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Company</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        {/* Email */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={company.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Employees */}
        <div className="col-md-6">
          <label htmlFor="employees" className="form-label">
            Employees
          </label>
          <input
            type="text"
            className="form-control"
            id="employees"
            name="employees"
            value={company.employees}
            onChange={handleChange}
            required
          />
        </div>

        {/* Fax No */}
        <div className="col-md-6">
          <label htmlFor="faxNo" className="form-label">
            Fax No
          </label>
          <input
            type="text"
            className="form-control"
            id="faxNo"
            name="faxNo"
            value={company.faxNo}
            onChange={handleChange}
          />
        </div>

        {/* Image URL */}
        <div className="col-md-6">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={company.imageUrl}
            onChange={handleChange}
          />
        </div>

        {/* Company Name */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={company.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Owner ID */}
        <div className="col-md-6">
          <label htmlFor="ownerId" className="form-label">
            Owner ID
          </label>
          <input
            type="text"
            className="form-control"
            id="ownerId"
            name="ownerId"
            value={company.ownerId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Owner Name */}
        <div className="col-md-6">
          <label htmlFor="ownerName" className="form-label">
            Owner Name
          </label>
          <input
            type="text"
            className="form-control"
            id="ownerName"
            name="ownerName"
            value={company.ownerName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Rating */}
        <div className="col-md-6">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            value={company.rating}
            onChange={handleChange}
          />
        </div>

        {/* Reference */}
        <div className="col-md-12">
          <label htmlFor="reference" className="form-label">
            Reference
          </label>
          <input
            type="text"
            className="form-control"
            id="reference"
            name="reference"
            value={company.reference}
            onChange={handleChange}
          />
        </div>

        {/* Address Fields */}
        <h4 className="mt-4">Head Office Address</h4>

        {/* Address Line */}
        <div className="col-md-6">
          <label htmlFor="addressLine" className="form-label">
            Address Line
          </label>
          <input
            type="text"
            className="form-control"
            id="addressLine"
            name="addressLine"
            value={company.headOffice.address.addressLine}
            onChange={handleAddressChange}
            required
          />
        </div>

        {/* City Name */}
        <div className="col-md-6">
          <label htmlFor="cityName" className="form-label">
            City Name
          </label>
          <input
            type="text"
            className="form-control"
            id="cityName"
            name="cityName"
            value={company.headOffice.address.cityName}
            onChange={handleAddressChange}
            required
          />
        </div>

        {/* Country Code */}
        <div className="col-md-6">
          <label htmlFor="countryCode" className="form-label">
            Country Code
          </label>
          <input
            type="text"
            className="form-control"
            id="countryCode"
            name="countryCode"
            value={company.headOffice.address.countryCode}
            onChange={handleAddressChange}
            required
          />
        </div>

        {/* Country Name */}
        <div className="col-md-6">
          <label htmlFor="countryName" className="form-label">
            Country Name
          </label>
          <input
            type="text"
            className="form-control"
            id="countryName"
            name="countryName"
            value={company.headOffice.address.countryName}
            onChange={handleAddressChange}
            required
          />
        </div>

        {/* Post Code */}
        <div className="col-md-6">
          <label htmlFor="postCode" className="form-label">
            Post Code
          </label>
          <input
            type="text"
            className="form-control"
            id="postCode"
            name="postCode"
            value={company.headOffice.address.postCode}
            onChange={handleAddressChange}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCompany;
