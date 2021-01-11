import React from "react";

class DoctorDetails extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      doctorId: this.props.doctorId,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      specialisation: this.props.specialisation,
      medicalLicenceNumber: this.props.medicalLicenceNumber,
      addresses: []
    };
  }

    render() {
        let pageInIndex = this.props.indexPage;
        let doctorId = this.props.doctorId;
        let addresses = this.state.addresses;

        if(addresses && addresses.length > 0) {
            return (
                <div className='doctor-details-container'>
                    <div className='go-to-index-div'>
                        <button className="btn btn-info" onClick={() => {
                            this.props.goToIndex(pageInIndex)
                        }}>
                            Wstecz
                        </button>
                    </div>
                    <div>
                        <table className='table table-sm table-bordered' style={{marginBottom: '50px'}}>
                            <thead>
                                <tr>
                                    <th>Imię</th>
                                    <th>Nazwisko</th>
                                    <th>Specjalizacja</th>
                                    <th>Nr PWZ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.firstName}</td>
                                    <td>{this.state.lastName}</td>
                                    <td>{this.state.specialisation}</td>
                                    <td>{this.state.medicalLicenceNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='addresses-table-div'>
                        <table className='table table-sm table-bordered' style={{tableLayout: 'fixed'}}>
                            <thead className='thead-dark'>
                                  <tr>
                                      <th scope="col">#</th>
                                      <th scope='col'>Nazwa instytucji medycznej</th>
                                      <th scope='col'>Ulica</th>
                                      <th scope='col'>Budynek</th>
                                      <th scope='col'>Lokal</th>
                                      <th scope='col'>Kod pocztowy</th>
                                      <th scope='col'>Miasto</th>
                                  </tr>
                              </thead>
                              <tbody>
                                {addresses.map((address, i) => {
                                    return(
                                        <tr key={`address-${i}`}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{address['medical_institution_name']}</td>
                                            <td>{address['street']}</td>
                                            <td>{address['street_number']}</td>
                                            <td>{address['local_number']}</td>
                                            <td>{address['zip_code']}</td>
                                            <td>{address['phone']}</td>
                                        </tr>
                                    )
                                })}
                              </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        return (
            <div className='doctor-details-container'>
                <div className='go-to-index-div'>
                    <button className="btn btn-info" onClick={() => {
                        this.props.goToIndex(pageInIndex)
                    }}>
                        Wstecz
                    </button>
                </div>
            </div>
        )
    }

    componentDidMount() {
    fetch(`doctor/details/${this.state.doctorId}/`)
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { error: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
            this.setState({
                addresses: data.addresses
            })
        });
  }
}

export default DoctorDetails;