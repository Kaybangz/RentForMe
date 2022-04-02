import React, { useState } from "react";
import "./LandLordForm.css";
import { stateData } from "./StateData/StateData";
import FramerAnimation from "../Animation/FramerAnimation";
import GoBackBtn from "../GoBackBtn/GoBackBtn";
import { useNavigate } from "react-router-dom";

const LandLordForm = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [houseName, setHouseName] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  const uploadHouse = (e) => {
    e.preventDefault();

    navigate("/HouseUploadSuccess");
  };

  return (
    <FramerAnimation>
      <>
        <GoBackBtn />
        <form className="landlord_form_container" onSubmit={uploadHouse}>
          <div>
            <label>Enter full name</label>
            <input
              type="text"
              name="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Enter mobile number</label>
            <input
              type="number"
              name="phoneNumber"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Enter name of apartment</label>
            <input
              type="text"
              name="housename"
              value={houseName}
              onChange={(e) => setHouseName(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Upload image of apartment</label>
            <input
              type="file"
              name="houseimage"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              multiple
            />
          </div>

          <div>
            <label>Apartment State</label>
            <select name="state" id="state">
              {stateData.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Enter Apartment Address</label>
            <input
              type="text"
              name="address"
              placeholder="House address, Name of city."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Enter Price</label>
            <input
              type="number"
              name="price"
              placeholder="Amount per night"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="tc__wrapper">
              <input type="checkbox" name="terms" required />{" "}
              <a href="!#">Accept terms and conditions</a>
            </label>
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </>
    </FramerAnimation>
  );
};

export default LandLordForm;
