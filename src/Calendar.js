import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import styled from "styled-components";

export default class MyForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: new Date(),
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  render() {

    const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    
`;
    const { selectedDay } = this.state;
    
    const FormattedDay = `${selectedDay.getFullYear()}-${selectedDay.getMonth()}-${selectedDay.getDate()}`
    console.log(FormattedDay)

    return (
      <CenteredDiv>
        {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>} */}
        {!selectedDay && <p>Choose a day</p>}
        <DayPickerInput onDayChange={this.handleDayChange} />
        {/* {FormattedDay} */}
      </CenteredDiv>
    );
  }
}