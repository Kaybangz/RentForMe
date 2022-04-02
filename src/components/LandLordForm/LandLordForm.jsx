import React, { useState } from "react";
import "./LandLordForm.css";
import { stateData } from "./StateData/StateData";
import FramerAnimation from "../Animation/FramerAnimation";
import HomeBtn from "../HomeBtn/HomeBtn";

const LandLordForm = () => {
  const [inputState, setInputState] = useState({
    fullName: "",
    phoneNumber: "",
    houseName: "",
    address: "",
    price: "",
  });

  const changeHandler = (e) => {
    setInputState({
      ...inputState,
      [e.target.target.name]: e.target.target.value,
    });
  };

  return (
    <FramerAnimation>
      <main className="form__wrapper">
        <HomeBtn/>
        <form className="landlord_form_container" method="POST">
          <div>
            <label>Enter full name</label>
            <input
              type="text"
              name="fullname"
              value={inputState.fullName}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <label>Enter mobile number</label>
            <input
              type="number"
              name="phoneNumber"
              value={inputState.phoneNumber}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <label>Enter name of apartment</label>
            <input
              type="text"
              name="housename"
              value={inputState.houseName}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <label>Upload image of apartment</label>
            <input type="file" name="houseimage" required multiple />
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
              value={inputState.address}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <label>Enter Price</label>
            <input
              type="number"
              name="price"
              placeholder="Amount per night"
              value={inputState.price}
              onChange={changeHandler}
              required
            />
          </div>

          <div>
            <label className="tc__wrapper">
              <input type="checkbox" name="terms" required />{" "}
              <a href="#">Accept terms and conditions</a>
            </label>
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main>
    </FramerAnimation>
  );
};

export default LandLordForm;
