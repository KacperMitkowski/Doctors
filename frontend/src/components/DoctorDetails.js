import React from "react";

class DoctorDetails extends React.Component {
    render() {
        let pageInIndex = this.props.indexPage;
        let doctorId = this.props.doctorId;
        return(
            <div className='doctor-details-container'>
                <div className='go-to-index-div'>
                    <button className="btn btn-info" onClick={() => {this.props.goToIndex(pageInIndex)}}>
                        Wstecz
                    </button>
                </div>
            </div>

        )
    }
}

export default DoctorDetails;