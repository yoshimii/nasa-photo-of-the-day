import React, { useState } from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


const DateChooser = props => {
    const [day, setDay] = useState(props)


    return (
    
        <div className="calendar" key={props.day}>
            {console.log(props.value)}
            <DayPickerInput
            selectedDay={props.day}
            onChange={props.handleChange}
            />     

        </div>
    );
};

export default DateChooser;