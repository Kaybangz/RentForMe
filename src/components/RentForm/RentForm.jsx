import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FramerAnimation from "../Animation/FramerAnimation";
import GoBackBtn from "../GoBackBtn/GoBackBtn";
import "./RentForm.css";

export const RentForm = () => {
  const navigate = useNavigate();

  //State for handling the input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [ccNumber, setCCNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCVV] = useState("");

  const rentApartment = (e) => {
    e.preventDefault();

    navigate("/RentingSuccess");
  };

  return (
    <FramerAnimation>
      <>
        <GoBackBtn />
        <form className="rent_form_container" onSubmit={rentApartment}>
          <h2>Customer Information</h2>

          <div>
            <label>Enter first name</label>
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Enter Last name</label>
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <h2 className="second__heading">Payment Information</h2>

          <div>
            <label>Credit card number</label>
            <input
              value={ccNumber}
              onChange={(e) => setCCNumber(e.target.value)}
              type="tel"
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              autocomplete="cc-number"
              maxlength="19"
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </div>

          <div>
            <label>Expiry date</label>
            <span class="expiration">
              <input
                type="text"
                name="month"
                placeholder="MM"
                maxlength="2"
                size="2"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
              />
              <input
                type="text"
                name="year"
                placeholder="YY"
                maxlength="2"
                size="2"
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
              />
            </span>
          </div>

          <div>
            <label>CVV</label>
            <input
              type="number"
              name="cvv"
              maxlength="4"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              required
            />
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
