
"use client";
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

  bookApmnt = () => {
    alert("appointment booked");
  }

  EnterWorkout = () => {
    alert("workout entered");
  }
  
   getOption = () => {
    //alert("pressed");
    let selectElement = document.querySelector('#select1');
    let chosenMonth = selectElement.value;
    let selectyear = document.querySelector('#YearInput');
    let chosenyear = selectyear.value;
    //alert(chosenMonth);
    this.setState({ currentDay: new Date(chosenMonth+" 1, "+chosenyear)});
    //const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    }

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
    document.getElementById("demo").innerHTML = "worked";
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
            
            <input type="text" id="YearInput" defaultValue="2024"></input>
            {/* <script>
            document.getElementById("YearInput").readOnly = false;
            </script> */}
            {/* <p>{this.months[this.state.currentDay.getMonth()].substring(0, 3)} {this.state.currentDay.getDate()}</p> */}
            <button onClick={this.getOption}>
              <span className="material-icons">
                Confirm Month and Year
                </span>
            </button>
            <button onClick={this.bookApmnt}>
              <span className="material-icons">
                Book Appointment
                </span>
            </button>
            <input type="text" id="WorkoutInput" defaultValue="No workout"></input>
            <button onClick={this.EnterWorkout}>
              <span className="material-icons">
                Enter Workout
                </span>
            </button>
          </div>
        </div>
        <div className="calendar-body">
        {/* <button onclick={this.getOption}> Choose Month </button> */}
            <p id="demo">not yet</p>
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

