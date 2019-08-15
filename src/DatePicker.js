import React, { useState } from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import styled from "styled-components";
// import { Divider } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css';

const DateChooser = props => {
    const [day, setDay] = useState(props)

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledParagraph = styled.p`
    color: white;
    font-weight: bold;
`;

// handleDayChange(day) {
//     props.setState({ selectedDay= day });
//   }

    return (
    
        <CenteredDiv className="Calendar"  key={props.day}>
            {console.log(props.value)}
            <StyledParagraph>Choose a date:</StyledParagraph>
            <DayPickerInput
            selectedDay={props.day}
            onChange={props.handleChange}
           
            />     
        {console.log(props.day)}
        </CenteredDiv>
    );
};

export default DateChooser;