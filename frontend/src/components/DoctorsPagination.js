import React from "react";


class DoctorsPagination extends React.Component {
    render() {
        return(
            <div className='pagination'>
                <span>{this.props.previous}</span>
                <span>{this.props.actual}</span>
                <span>{this.props.next}</span>
            </div>
        )
    }
}

export default DoctorsPagination;