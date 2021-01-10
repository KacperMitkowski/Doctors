import React, { Component } from "react";
import { render } from "react-dom";
import DoctorsPagination from "./DoctorsPagination.js";
import '../../static/css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.updatePage = this.updatePage.bind(this);

    this.state = {
      doctors: [],
      previousPage: 0,
      actualPage: 1,
      nextPage: 2,
      howManyPages: 0,
      itemsPerPage : 0,
      error: ''
    };
  }

  render() {
    let doctors = this.state.doctors;

    if(doctors && doctors.length > 0) {
      return (
          <div className='container'>
              <DoctorsPagination
                previousPage={this.state.nextPage}
                actualPage={this.state.actualPage}
                nextPage={this.state.nextPage}
                howManyPages={this.state.howManyPages}
                itemsPerPage={this.state.itemsPerPage}
                updatePage={this.updatePage}
              />
            <div className="doctors-list">
              <ul>
                {doctors.map(doctor => {
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

  componentDidMount() {
    fetch(`doctor/${this.state.actualPage}/`)
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { error: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
          this.setState(
              {doctors: data.doctors,
                    previousPage: data.previous_page,
                    actualPage: data.actual_page,
                    nextPage: data.next_page,
                    howManyPages: data.how_many_pages,
                    itemsPerPage: data.items_per_page
                    })
        });
  }
  updatePage(actualPage) {
      fetch(`doctor/${actualPage}/`)
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { error: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
          this.setState(
              {doctors: data.doctors,
                    previousPage: data.previous_page,
                    actualPage: data.actual_page,
                    nextPage: data.next_page,
                    howManyPages: data.how_many_pages,
                    itemsPerPage: data.items_per_page
                    })
        });
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);