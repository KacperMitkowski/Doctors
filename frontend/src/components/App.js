import React, { Component } from "react";
import { render } from "react-dom";
import DoctorsPagination from "./DoctorsPagination.js";
import '../../static/css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("doctor/1/")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    let data = this.state.data;
    console.log(data)
    if(data.doctors) {
      return (
          <div className='container'>
            <div className='doctors-pagination'>
              <DoctorsPagination
                previous={data.previous}
                actual={data.actual}
                next={data.next}
              />
            </div>
            <div className="doctors-list">
              <ul>
                {data.doctors.map(doctor => {
                  return (
                    <li key={doctor.id}>
                      {doctor.partner_id} - {doctor.first_name} - {doctor.last_name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
      );
    }
    return null;
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);