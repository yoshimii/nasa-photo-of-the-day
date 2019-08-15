import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import DateChooser from "./DatePicker";

const Calendar = () => {
    
    const [date, setDate] = useState(new Date())

    return (
    
        <div className="calendar">
            {console.log(date)}
            <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={date}
            onChange={handleChange}
            />     

        </div>
    );
};

export default Calendar; 