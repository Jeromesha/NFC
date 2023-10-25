import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function VcardDetial() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);
  const [formData, setFormData] = useState({
    vCardName: "",
    occupation: "",
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    alternateEmail: "",
    location: "",
    locationURL: "",
    dateOfBirth: "",
    company: "",
    jobTitle: "",
    defaultLanguage: "",
    image: null, // Use null for the image property
    images: null, // Use null for the image property
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
        setFormData({ ...formData, image: file });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageChanges = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImages(event.target.result);
        setFormData({ ...formData, images: file });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <div>
        <h5 style={{ marginLeft: "6%", marginTop: "3%" }}>VCard Form</h5>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className="vcardDetial_div_input">
                <label>VCard Name:</label>
                <input
                  type="text"
                  name="vCardName"
                  value={formData.vCardName}
                  onChange={handleChange}
                />
              </div>
              <div className="vcardDetial_div_input">
                <label>Occupation:</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </div>
              <div className="vcardDetial_div_input">
                <label>Description:</label>
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="vcardDetial_div_input">
                <label>Profil:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {selectedImage && (
                  <div>
                    <p>Preview</p>
                    <div>
                      <img
                        src={selectedImage}
                        alt="Selected"
                        style={{ maxWidth: "20%", maxHeight: "20%" }}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="vcardDetial_div_input">
                <label>Cover:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChanges}
                />
                {selectedImages && (
                  <div>
                    <p>Preview</p>
                    <div>
                      <img
                        src={selectedImages}
                        alt="Selected"
                        style={{ maxWidth: "20%", maxHeight: "20%" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <h5 style={{ marginLeft: "6%" }}>VCard Details</h5>
          <Row>
            <Col>
              <div className="vcardDetial_div_input">
                <label>firstName:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="vcardDetial_div_input">
                <label>lastName:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="vcardDetial_div_input">
                <label>email:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="vcardDetial_div_input">
                <label>phone:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="vcardDetial_div_input">
                <label>alternateEmail:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.alternateEmail}
                  onChange={handleChange}
                />
              </div>
            </Col>
            <Col>
              <div className="vcardDetial_div_input">
                <label>location:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="vcardDetial_div_input">
                <label>locationURL:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.locationURL}
                  onChange={handleChange}
                />
              </div>
              <div className="vcardDetial_div_input">
                <label>dateOfBirth:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div className="vcardDetial_div_input">
                <label>company:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="vcardDetial_div_input">
                <label>defaultLanguage:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.defaultLanguage}
                  onChange={handleChange}
                />
              </div>
            </Col>
          </Row>
          <div style={{ marginLeft: "4%" }}>
            <button type="submit" className="vcard_detial_btton_submit">
              Submit
            </button>
            <button type="submit" className="vcard_detial_btton_discard">
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
