import React, { useEffect, useState } from "react";
import "./Form.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";

function Form() {
  const [submit, setSubmit] = useState(() => {
    const stored = localStorage.getItem("formData");
    return stored ? JSON.parse(stored) : [];
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    const view = submit[index];
    setViewer(view);
    setShow(true);
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    country: "",
    address: "",
    zip: "",
    message: "",
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(submit));
  }, [submit]);

  const [error, setError] = useState({});
  const validation = (data) => {
    const error = {};
    const nameRegex = /^[A-Za-z]{1,20}$/;

    const first = data.firstName.trim();
    if (first === "") {
      error.firstName = "First name is required";
    } else if (!nameRegex.test(first)) {
      error.firstName =
        "First name must be one word, letters only, max 20 characters";
    }

    const last = data.lastName.trim();
    if (last === "") {
      error.lastName = "Last name is required";
    } else if (!nameRegex.test(last)) {
      error.lastName =
        "Last name must be one word, letters only, max 20 characters";
    }

    if (data.email === "") {
      error.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!emailRegex.test(data.email)) {
        error.email = "Enter a valid email address";
      }
    }

    if (data.phone === "") {
      error.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      error.phone = "Phone number must be exactly 10 digits";
    }

    if (data.birthDate === "") {
      error.birthDate = "Birth date is required";
    }

    if (data.country === "") {
      error.country = "Country/State is required";
    }

    if (data.address === "") {
      error.address = "Address is required";
    }

    if (data.zip === "") {
      error.zip = "Zip code is required";
    } else if (data.zip.length < 5 || data.zip.length > 6 || isNaN(data.zip)) {
      error.zip = "Zip code must be 5 or 6 digits";
    }
    if (data.message === "") {
      error.message = "Message is required";
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "phone") {
      if (value === "") {
        setError((prev) => ({ ...prev, phone: "Phone number is required" }));
      } else if (!/^\d{10}$/.test(value)) {
        setError((prev) => ({
          ...prev,
          phone: "Phone number must be exactly 10 digits",
        }));
      } else {
        setError((prev) => ({ ...prev, phone: "" }));
      }
    } else if (name === "email") {
      if (value === "") {
        setError((prev) => ({ ...prev, email: "Email is required" }));
      } else if (!regex.test(value)) {
        setError((prev) => ({ ...prev, email: "Enter a valid email" }));
      } else {
        setError((prev) => ({ ...prev, email: "" }));
      }
    } else if (name === "zip") {
      if (value === "") {
        setError((prev) => ({ ...prev, zip: "Zip code is required" }));
      } else if (value.length < 5 || value.length > 6 || isNaN(value)) {
        setError((prev) => ({
          ...prev,
          zip: "Zip code must be 5 or 6 digits",
        }));
      } else {
        setError((prev) => ({ ...prev, zip: "" }));
      }
    } else {
      setError((prev) => ({
        ...prev,
        [name]:
          value === ""
            ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
            : "",
      }))
    }
  }

  const deleteUserInfo = (indexToDelete) => {
    const updated = submit.filter((_, index) => index !== indexToDelete);
    setSubmit(updated);
  }

  const [editx, setEditx] = useState(null);
  const editUserInfo = (index) => {
    const edit = submit[index];
    setData(edit);
    setEditx(index);
  }

  const [viewer, setViewer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation(data);
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    if (editx !== null) {
      const updatedSubmit = [...submit];
      updatedSubmit[editx] = data;
      setSubmit(updatedSubmit);
      setEditx(null);
    } else {
      setSubmit([...submit, data]);
    }

    setData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthDate: "",
      country: "",
      address: "",
      zip: "",
      message: "",
    })
    setError({})
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Team Everest | Form Portal</title>
        <meta name="Contact Us" content="Learn more about our team and mission." />
        <meta name="keywords" content="React, Task Manager, Dashboard, Productivity, charity (Donor) App" />
      </Helmet>
   
    <div className="main-container">

    <Container className="pt-5 pb-5">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={data.firstName}
                onChange={handleChange}
                maxLength={20}
                className={`FirstName-textbox ${
                  error.firstName ? "input-error" : ""
                }`}
              />
              {error.firstName && <p className="error">{error.firstName}</p>}
            </div>

            <div className="col-12 col-md-6 mb-3">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={data.lastName}
                onChange={handleChange}
                maxLength={20}
                className={`LastName-textbox ${
                  error.lastName ? "input-error" : ""
                }`}
              />
              {error.lastName && <p className="error">{error.lastName}</p>}
            </div>

            <div className=" col-12 col-md-6 mb-3">
              <input
                type="email"
                name="email"
                placeholder="E-Mail ID"
                value={data.email}
                onChange={handleChange}
                className={`FirstName-textbox ${
                  error.email ? "input-error" : ""
                }`}
              />
              {error.email && <p className="error">{error.email}</p>}
            </div>
            <div className="col-12 col-md-6 mb-3">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={data.phone}
                onChange={handleChange}
                className={`LastName-textbox ${
                  error.phone ? "input-error" : ""
                }`}
              />
              {error.phone && <p className="error">{error.phone}</p>}
            </div>

            <div className="col-12 col-md-6 mb-3">
              <input
                type="date"
                name="birthDate"
                value={data.birthDate}
                onChange={handleChange}
                className={`FirstName-textbox ${
                  error.birthDate ? "input-error" : ""
                }`}
              />
              {error.birthDate && <p className="error">{error.birthDate}</p>}
            </div>

            <div className="col-12 col-md-6 mb-3">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={data.country}
                onChange={handleChange}
                maxLength={30}
                className={`LastName-textbox ${
                  error.country ? "input-error" : ""
                }`}
              />
              {error.country && <p className="error">{error.country}</p>}
            </div>

            <div className="col-12 col-md-6 mb-3">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={data.address}
                onChange={handleChange}
                maxLength={30}
                className={`FirstName-textbox ${
                  error.address ? "input-error" : ""
                }`}
              />
              {error.address && <p className="error">{error.address}</p>}
            </div>

            <div className="col-12 col-md-6 mb-3">
              <input
                type="number"
                name="zip"
                placeholder="Zip-Code"
                value={data.zip}
                onChange={handleChange}
                className={`LastName-textbox ${error.zip ? "input-error" : ""}`}
              />
              {error.zip && <p className="error">{error.zip}</p>}
            </div>

            <div className="col-md-12 mb-3">
              <input
                type="message"
                name="message"
                placeholder="Message"
                value={data.message}
                onChange={handleChange}
                maxLength={200}
                className={`LastName-textbox1 ${
                  error.country ? "input-error" : ""
                }`}
              />
              {error.message && <p className="error">{error.message}</p>}
            </div>

            <div className="col-md-12 mb-3 d-flex justify-content-center ">
              <button type="submit" className="buttondiv">
                Submit
              </button>
            </div>
          </div>
        </form>

        {submit.length > 0 && (
          <table className="table-main">
            <thead className="thead-main">
              <tr className="table-row">
                <th>Action</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Birth Date</th>
                <th>Location</th>
                <th>Address</th>
                <th>Zip</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody className="tbody-main">
              {submit.map((ele, index) => (
                <tr key={index} className="table-row">
                  <td>
                    <button
                      onClick={() => deleteUserInfo(index)}
                      className="Deletebutton"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => editUserInfo(index)}
                      className="Deletebutton"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleShow(index)}
                      className="Deletebutton"
                    >
                      View
                    </button>
                  </td>
                  <td>{ele.firstName}</td>
                  <td>{ele.lastName}</td>
                  <td>{ele.email}</td>
                  <td>{ele.phone}</td>
                  <td>{ele.birthDate}</td>
                  <td>{ele.country}</td>
                  <td>{ele.address}</td>
                  <td>{ele.zip}</td>
                  <td>{ele.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <Modal show={show} centered onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>First Name:</strong> {viewer.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {viewer.lastName}
            </p>
            <p>
              <strong>Email:</strong> {viewer.email}
            </p>
            <p>
              <strong>Phone:</strong> {viewer.phone}
            </p>
            <p>
              <strong>Birth Date:</strong> {viewer.birthDate}
            </p>
            <p>
              <strong>Country:</strong> {viewer.country}
            </p>
            <p>
              <strong>Address:</strong> {viewer.address}
            </p>
            <p>
              <strong>Zip:</strong> {viewer.zip}
            </p>
            <p>
              <strong>Message:</strong> {viewer.message}
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </Container>
    </div>
    </>
  )
}
export default Form
