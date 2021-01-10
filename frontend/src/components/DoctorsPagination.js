import React from "react";


class DoctorsPagination extends React.Component {
    render() {
        let previousPage = this.props.previousPage;
        let actualPage = this.props.actualPage;
        let nextPage = this.props.nextPage;
        let howManyPages = this.props.howManyPages;
        let itemsPerPage = this.props.itemsPerPage;
        let elements = [];

        if(actualPage > 6) {
            elements.push(
                <div className="pagination-element" onClick={() => {this.props.updatePage(1)}}>
                    <span>&lt;&lt;&lt;</span>
                </div>
            )
        }

        for (let i = actualPage - 5; i < actualPage + 5; i++) {
            if(i > 0 && i < howManyPages) {
                elements.push(
                    <div key={`page-element-${i}`} onClick={() => {this.props.updatePage(i)}} className={i === actualPage ? "active-element pagination-element" : "pagination-element"}>
                        <span>{i}</span>
                    </div>
                )
            }
        }
        if(actualPage !== howManyPages) {
            elements.push(
                <div className="pagination-element" onClick={() => {this.props.updatePage(howManyPages)}}>
                    <span>&gt;&gt;&gt;</span>
                </div>
            )
        }


        return(
            <div className='doctors-pagination-bar-container'>
                {elements}
            </div>
        )
    }
}

export default DoctorsPagination;