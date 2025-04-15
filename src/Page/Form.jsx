import React, { useEffect, useState } from "react";
import "./Form.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

function FormComponents() {
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
    console.log("Dagtattaa", data);
    const error = {};
    const nameRegex = /^[A-Za-z]{1,20}$/;

    if (!data.firstName.trim()) {
      error.firstName = "First name is required";
    } else if (!nameRegex.test(data.firstName.trim())) {
      error.firstName =
        "First name must be one word, letters only, max 20 characters";
    }

    if (!data.lastName.trim()) {
      error.lastName = "Last name is required";
    } else if (!nameRegex.test(data.lastName.trim())) {
      error.lastName =
        "Last name must be one word, letters only, max 20 characters";
    }

    if (!data.email) {
      error.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!emailRegex.test(data.email)) {
        error.email = "Enter a valid email address";
      }
    }

    if (!data.phone) {
      error.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      error.phone = "Phone number must be exactly 10 digits";
    }

    if (!data.birthDate) error.birthDate = "Birth date is required";
    if (!data.country) error.country = "Country/State is required";
    if (!data.address) error.address = "Address is required";

    if (!data.zip) {
      error.zip = "Zip code is required";
    } else if (data.zip.length < 5 || data.zip.length > 6 || isNaN(data.zip)) {
      error.zip = "Zip code must be 5 or 6 digits";
    }

    if (!data.message) error.message = "Message is required";

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));

    const updatedError = { ...error };
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      updatedError.email =
        value === ""
          ? "Email is required"
          : !emailRegex.test(value)
          ? "Enter a valid email"
          : "";
    } else if (name === "phone") {
      updatedError.phone =
        value === ""
          ? "Phone number is required"
          : !/^\d{10}$/.test(value)
          ? "Phone number must be exactly 10 digits"
          : "";
    } else if (name === "zip") {
      updatedError.zip =
        value === ""
          ? "Zip code is required"
          : value.length < 5 || value.length > 6 || isNaN(value)
          ? "Zip code must be 5 or 6 digits"
          : "";
    } else {
      updatedError[name] =
        value === ""
          ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
          : "";
    }

    setError(updatedError);
  };

  const deleteUserInfo = (indexToDelete) => {
    const updated = submit.filter((_, index) => index !== indexToDelete);
    setSubmit(updated);
  };

  const [editx, setEditx] = useState(null);
  const editUserInfo = (index) => {
    const edit = submit[index];
    setData(edit);
    setEditx(index);
  };

  const [viewer, setViewer] = useState(false);

  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    const errors = validation(data);
    console.log("Errrorss", errors);
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    if (editx !== null) {
      const updatedSubmit = [...submit];
      updatedSubmit[editx] = data;
      console.log("updatedSubmit", updatedSubmit);
      setSubmit(updatedSubmit);
      setEditx(null);
    } else {
      console.log("[...submit, data]", [...submit, data]);
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
    });
    setError({});
  };

  const formFields = [
    {
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      maxLength: 20,
      col: 6,
    },
    {
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      maxLength: 20,
      col: 6,
    },
    {
      type: "email",
      name: "email",
      placeholder: "E-Mail",
      col: 6,
    },
    {
      type: "",
      name: "phone",
      placeholder: "Phone Number",
      col: 6,
    },
    {
      type: "date",
      name: "birthDate",
      placeholder: "Birth Date",
      col: 6,
    },
    {
      type: "text",
      name: "country",
      placeholder: " Country",
      col: 6,
      maxLength: 20,
    },
    {
      type: "text",
      name: "address",
      placeholder: " Address",
      col: 6,
      maxLength: 80,
    },
    {
      type: "text",
      name: "zip",
      placeholder: "Zip-Code",
      col: 6,
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Enter your message",
      rows: 2,
      col: 12,
      maxLength: 30,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Team Everest | Form Portal</title>
        <meta
          name="Contact Us"
          content="Learn more about our team and mission."
        />
        <meta
          name="keywords"
          content="React, Task Manager, Dashboard, Productivity, charity (Donor) App"
        />
      </Helmet>

      <div className="main-container">
        <Container className="pt-5 pb-5">
          <Form onSubmit={handleSubmit}>
            <Row>
              {formFields.map((field) => (
                <Col md={field.col || 12} key={field.name} className="mb-4">
                  <Form.Group controlId={field.name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      maxLength={field.maxLength}
                      value={data[field.name]}
                      onChange={handleChange}
                      isInvalid={!!error[field.name]}
                      col={data.col}
                    />

                    <Form.Control.Feedback
                      type="invalid"
                      style={{ color: "#1A5653" }}
                    >
                      {error[field.name]}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              ))}
            </Row>
            <div className="text-center">
              <Button
                type="submit"
                className="btn btn-primary"
                style={{
                  background: "linear-gradient(90deg,#1A5653, #1A5653)",
                  border: "1px solid #1A5653",
                }}
              >
                Submit
              </Button>
            </div>
          </Form>

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
        </Container>
      </div>
    </>
  );
}

export default FormComponents;