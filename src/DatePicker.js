import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DateChooser = props => {
    return (
        <div className="calendar" key={props.startDate}>
            <DatePicker
dateFormat="yyyy/MM/dd"
selected={props.startDate}
onChange={props.handleChange} />
        </div>
    );
};

export default DateChooser;