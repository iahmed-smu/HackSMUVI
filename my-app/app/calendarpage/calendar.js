
"use client";
import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css'
import { eventNames } from 'process';




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
    const workoutDescription = document.getElementById("WorkoutInput").value;
    const workoutDate = this.state.currentDay.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  
    const workoutData = {
      date: workoutDate,
      description: workoutDescription
    };
  
    fetch('http://localhost:8080/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workoutData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Workout entered successfully');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error entering workout');
    });
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

   WorkoutForm = () => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [workoutData, setWorkoutData] = useState(null);
    const [getDate, setGetDate] = useState('');
  
    // Handle the POST request to submit data
     handleSubmit = async (event) => {
      //event.preventDefault();
      try {
        const response = await fetch('http://localhost:8080/workouts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: "10-12-2024",
            description: "hi",
          }),
        });
        //console.log(response);
        if (!response.ok) {
          throw new Error('Failed to submit workout');
        }
        
        //alert('Workout submitted successfully!');
        setDate('');
        setDescription('');
      } catch (error) {
        console.error('Error posting workout:', error);
      }
    };
  
    // Handle the GET request to retrieve data
     handleGetWorkout = async () => {
      console.log("called get");
      try {
        const response = await fetch(`http://localhost:8080/workouts/10-12-2024`);
  
        if (!response.ok) {
          throw new Error('Failed to fetch workout');
        }
        const data = await response.json();
        document.getElementById("workoutOut").innerHTML = data;
        setWorkoutData(data);
      } catch (error) {
        console.error('Error fetching workout:', error);
      }
    };
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
        <div style={{marginTop:"150px"}}>
      <h2>Submit a Workout</h2>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Date:</label>
          <input 
            type="text" 
            value={this.state.currentDay} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={"description"} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <button onClick={this.handleSubmit}>Submit Workout</button>
      </form>

      <h2>Get Workout by Date</h2>
      <div>
        <input 
          type="text" 
          value={this.state.currentDay.getDate()} 
          onChange={(e) => setGetDate(e.target.value)} 
        />
        <button onClick={this.handleGetWorkout}>Get Workout</button>
      </div>

      {"wokroutdata" && (
        <div>
          <h3>Workout on {this.state.currentDay.getDate()}</h3>
          <p><strong>Date:</strong> {this.state.currentDay.getDate()}</p>
          <p><strong>Description:</strong> {"description"}</p>
        </div>
      )}
    </div>
    
    <div>
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
            <div>
            <button onClick={this.bookApmnt}>
              <span className="material-icons">
                Book Appointment
                </span>
            </button>
            </div>
            <p id="workoutOut"></p>
            <div>
            {/* <input type="text" id="WorkoutInput" defaultValue="No workout"></input>
            <button onClick={this.EnterWorkout}>
              <span className="material-icons">
                Enter Workout
                </span>
            </button> */}
            </div>
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
