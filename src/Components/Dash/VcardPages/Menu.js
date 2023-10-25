import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function Menu() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h5 style={{ marginLeft: "6%", marginTop: "3%" }}>Add Menu</h5>
      <form>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}>
            <div className="vcardDetial_div_input">
              <label for="cars">Timing</label>
              <select name="cars" id="cars">
                <option value="volvo">Morning</option>
                <option value="saab">Afternoon</option>
                <option value="opel">Night</option>
                <option value="audi">Dessert</option>
                <option value="audi">Sidish</option>
              </select>
            </div>
            <div className="vcardDetial_div_input">
              <label>Name</label>
              <input type="text" placeholder="Name"></input>
            </div>
            <div className="vcardDetial_div_input">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {selectedImage && (
                <div>
                  <h3>Selected Image Preview:</h3>
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
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <div className="vcardDetial_div_input">
              <label>Price</label>
              <input type="number" placeholder="Enter price here"></input>
            </div>
            <div className="vcardDetial_div_input">
              <label>Discription</label>
              <textarea type="text" placeholder="Name"></textarea>
            </div>
          </Col>
        </Row>
        <button type="submit" className="vcard_detial_btton_submit">Submit</button>
        <button type="submit" className="vcard_detial_btton_discard">Discard</button>
      </form>
    </div>
  );
}
