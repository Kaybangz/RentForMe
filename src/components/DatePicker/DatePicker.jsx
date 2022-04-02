import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DatePicker.css';

const DatePicker = ({
  minDate,
  value,
  onChange
}) => {

  return (
    <div className="datePicker__wrapper">
      <Calendar className="datePicker" selectRange returnValue="range" value={value} minDate={minDate}  onChange={onChange} tileDisable/>
    </div>
  );
};

export default DatePicker;
