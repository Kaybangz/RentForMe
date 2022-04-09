import React, { useState } from "react";
import "./LandLordForm.css";
import { stateData } from "./StateData/StateData";
import FramerAnimation from "../Animation/FramerAnimation";
import GoBackBtn from "../GoBackBtn/GoBackBtn";
import { useNavigate } from "react-router-dom";

const LandLordForm = () => {
  const navigate = useNavigate();

    //State for handling input fields
    const [inputValues, setInputValues] = useState({
      name: "",
      number: "",
      houseName: "",
      houseAddress: "",
      price: ""
    });
  
    //State for handling errors
    const [inputErrs, setInputErrs] = useState({});
  
    const [isValid, setIsValid] = useState(false);
  
    //Input fields onchange handler
    const changeHandler = (e) => {
      const { name, value } = e.target;
      setInputValues({ ...inputValues, [name]: value });
    };
  
    //Submit function
    const submitForm = (e) => {
      e.preventDefault();
      setInputErrs(validateForm(inputValues));
      setIsValid(true);
  
      if (isValid && Object.keys(inputErrs).length === 0) {
        navigate('/HouseUploadSuccess')
      }
    };
  
    //Form validation
    const validateForm = (values) => {
      const errors = {};
  
      if (!values.name) {
        errors.name = "Enter full name";
      }
      if (values.number < 10 || values.number === "") {
        errors.number = "Enter mobile number";
      }
      if (values.houseName === "") {
        errors.houseName = "Enter house name";
      }
      if (values.houseAddress === "") {
        errors.houseAddress = "Enter house address";
      } 
      if (values.price === "") {
        errors.price = "Enter price";
      } 
  
      return errors;
    };

  return (
    <FramerAnimation>
      <>
        <GoBackBtn />
        <form className="landlord_form_container" onSubmit={submitForm}>
          <div>
            <label>Enter full name</label>
            <input
              type="text"
              name="name"
              value={inputValues.name}
              onChange={changeHandler}
              minLength="1"
            />
            <p>{inputErrs.name}</p>
          </div>

          <div>
            <label>Enter mobile number</label>
            <input
              type="number"
              name="number"
              value={inputValues.number}
              onChange={changeHandler}
              minLength="11"
              maxLength="11"
            />
            <p>{inputErrs.number}</p>
          </div>

          <div>
            <label>Enter name of house</label>
            <input
              type="text"
              name="houseName"
              value={inputValues.houseName}
              onChange={changeHandler}
              minLength="5"
            />
            <p>{inputErrs.houseName}</p>
          </div>

          <div>
            <label>Upload image(s) of house</label>
            <input
              type="file"
              name="houseimage"
              required
              multiple
            />
          </div>

          <div>
            <label>Location of house(state)</label>
            <select name="state" id="state">
              {stateData.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Enter house Address</label>
            <input
              type="text"
              name="houseAddress"
              placeholder="House address, Name of city."
              value={inputValues.houseAddress}
              onChange={changeHandler}
              minLength="1"
            />
            <p>{inputErrs.houseAddress}</p>
          </div>

          <div>
            <label>Enter Price</label>
            <input
              type="number"
              name="price"
              placeholder="Amount per night"
              value={inputValues.price}
              onChange={changeHandler}
              minLength="1"
              maxLength="3"
            />
            <p>{inputErrs.price}</p>
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
