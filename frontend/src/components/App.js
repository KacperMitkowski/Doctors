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
      console.log(doctors);
      return (
          <div>
              <DoctorsPagination
                previousPage={this.state.nextPage}
                actualPage={this.state.actualPage}
                nextPage={this.state.nextPage}
                howManyPages={this.state.howManyPages}
                itemsPerPage={this.state.itemsPerPage}
                updatePage={this.updatePage}
              />
            <div className="table-container">
                <table className='table table-sm table-bordered' style={{tableLayout: 'fixed'}}>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope='col'>Imię</th>
                            <th scope='col'>Drugie imię</th>
                            <th scope='col'>Nazwisko</th>
                            <th scope='col'>Zawód opis</th>
                            <th scope='col'>Data rozpoczęcia działalności</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, i) => {
                            let startActivityDate = doctor['medicine_activity_start_date'];
                            let d = new Date(Date.parse(startActivityDate));
                            let dateToDisplay = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`

                            return (
                                <tr key={`doctor-${i}`}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{doctor['first_name']}</td>
                                    <td>{doctor['middle_name']}</td>
                                    <td>{doctor['last_name']}</td>
                                    <td>{doctor['practice_description']}</td>
                                    <td>{dateToDisplay}</td>
                                    <td>
                                        <i className="fa fa-spinner fa-spin"></i>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
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