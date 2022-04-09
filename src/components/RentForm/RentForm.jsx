import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FramerAnimation from "../Animation/FramerAnimation";
import GoBackBtn from "../GoBackBtn/GoBackBtn";
import "./RentForm.css";

export const RentForm = () => {
  const navigate = useNavigate();

  //State for handling input fields
  const [inputValues, setInputValues] = useState({
    name: "",
    number: "",
    email: "",
    ccNum: "",
    expMonth: "",
    expYear: "",
    cvv: "",
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
      navigate('/RentingSuccess')
    }
  };

  //Form validation
  const validateForm = (values) => {
    const errors = {};

    //Email regex
    var emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //cvv regex
    var cvvRegex = /^[0-9]{3,4}$/;
    //credit card regex
    const ccRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;

    if (values.name === "") {
      errors.name = "Enter full name";
    }
    if (values.email === "") {
      errors.email = "Enter email address";
    }
    if (values.number < 10 || values.number === "") {
      errors.number = "Enter mobile number";
    }
    if (values.ccNumber === "") {
      errors.ccNumber = "Enter credit card number";
    }
    if (!values.expMonth && !values.expYear) {
      errors.expDate = "Enter month and year of expiration";
    }
    if (values.cvv === "") {
      errors.cvv = "Enter cvv number";
    } 
    else if (!emailRegex.test(values.email)) {
      errors.email = "Enter valid email address";
    } 
    else if (!ccRegex.test(values.ccNumber)) {
      errors.ccNumber = "Enter valid credit card number";
    } 
    else if (!cvvRegex.test(values.cvv)) {
      errors.cvv = "Enter valid cvv number";
    }

    return errors;
  };

  return (
    <FramerAnimation>
      <>
        <GoBackBtn />
        <form className="rent_form_container" onSubmit={submitForm}>
          <h2>Customer Information</h2>

          <div>
            <label>Enter full name</label>
            <input
              type="text"
              name="name"
              value={inputValues.name}
              minLength="1"
              onChange={changeHandler}
            />
            <p>{inputErrs.name}</p>
          </div>

          <div>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={inputValues.email}
              onChange={changeHandler}
              minLength="1"
            />
            <p>{inputErrs.email}</p>
          </div>

          <div>
            <label>Enter mobile number</label>
            <input
              type="tel"
              name="number"
              minLength="11"
              maxLength="11"
              value={inputValues.number}
              onChange={changeHandler}
            />
            <p>{inputErrs.number}</p>
          </div>

          <h2 className="second__heading">Payment Information</h2>

          <div>
            <label>Credit card number</label>
            <input
              name="ccNum"
              type="tel"
              maxLength="16"
              minLength="16"
              value={inputValues.ccNum}
              onChange={changeHandler}
              placeholder="xxxx xxxx xxxx xxxx"
            />
            <p>{inputErrs.ccNumber}</p>
          </div>

          <div>
            <label>Expiry date</label>
            <span className="expiration">
              <input
                type="tel"
                name="expMonth"
                placeholder="MM"
                maxLength="2"
                size="2"
                minLength="2"
                value={inputValues.expMonth}
                onChange={changeHandler}
                required
              />
              <span>/</span>
              <input
                type="tel"
                name="expYear"
                placeholder="YY"
                maxLength="2"
                size="2"
                minLength="2"
                value={inputValues.expYear}
                onChange={changeHandler}
                required
              />
            </span>
            <p>{inputErrs.expDate}</p>
          </div>

          <div>
            <label>CVV</label>
            <input
              type="tel"
              name="cvv"
              minLength="3"
              maxLength="4"
              value={inputValues.cvv}
              onChange={changeHandler}
            />
            <p>{inputErrs.cvv}</p>
          </div>

          <div>
            <label className="tc__wrapper">
              <input type="checkbox" name="terms" required />{" "}
              <a>Accept terms and conditions</a>
            </label>
          </div>

          <div className="submit_btn_wrapper">
            <input className="submit__btn" type="submit" value="Confirm" />
          </div>
        </form>
      </>
    </FramerAnimation>
  );
};
