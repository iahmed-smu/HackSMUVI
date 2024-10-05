

import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css'




export default class Calendar extends Component {
  constructor() {
    super();

    this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    this.state = {
      currentDay: new Date()
    }
  }

  
   getOption = () => {
    //alert("pressed");
    let selectElement = document.querySelector('#select1');
    let chosenMonth = selectElement.value;
    //alert(chosenMonth);
    this.setState({ currentDay: new Date(chosenMonth+" 1, 2024")});
    //const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    }

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  }

  nextMonth = () => {
    alert("was rpessed");
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)) });
  }

  previousMonth = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)) });
  }
  
  render() {
    return (
      <div className="calendar">
        <div className="calendar-header">
          <div className="title">
            <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
          </div>
          <div className="tools">
            <button onClick={this.getOption}>
              <span className="material-icons">
                Confirm Month
                </span>
            </button>
            {/* <p>{this.months[this.state.currentDay.getMonth()].substring(0, 3)} {this.state.currentDay.getDate()}</p>
            <button onClick={this.nextMonth}>
              <span className="material-icons">
                Next Day
                </span>
            </button> */}
          </div>
        </div>
        <div className="calendar-body">
        <p> Select Month
        <select id="select1">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>
        </p>
        <button onclick={this.getOption}> Choose Month </button>
          <div className="table-header">
            {
              this.weekdays.map((weekday) => {
                return <div className="weekday"><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay} />
        </div>
      </div>
    )
  }
  
}

/* function chooseMonth() {
    alert("chose month");
  const monthSelect = document.getElementById('monthSelect');
  const selectedMonth = monthSelect.value;  // Get the selected month
  
  const resultElement = document.getElementById('result');
  
  if (selectedMonth) {
    resultElement.textContent = `You selected: ${selectedMonth}`;
  } else {
    resultElement.textContent = 'Please select a month first!';
  } */
//}


