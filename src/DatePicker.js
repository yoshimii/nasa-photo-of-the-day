import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Planetarium from "./Planetarium";
import "react-datepicker/dist/react-datepicker.css";


const DateChooser = props => {
    const [date, setDate] = useState(new Date())


    return (
    
        <div className="calendar" key={props.date}>
            {console.log(date)}
            <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={props.date}
            onChange={props.handleChange}
            />     

        </div>
    );
};

export default DateChooser;