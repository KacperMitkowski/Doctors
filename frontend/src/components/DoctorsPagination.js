import React from "react";


class DoctorsPagination extends React.Component {
    render() {
        let previousPage = this.props.previousPage;
        let actualPage = this.props.actualPage;
        let nextPage = this.props.nextPage;
        let howManyPages = this.props.howManyPages;
        let elements = [];

        for (let i = actualPage - 5; i < actualPage + 5; i++) {
            if(i > 0 && i < howManyPages) {
                elements.push(
                    <div key={`page-element-${i}`} className='pagination-element'>
                        <span onClick={() => {this.props.updatePage(i)}}>{i}</span>
                    </div>
                )
            }
        }

        return(
            <div className='pagination'>
                {elements}
            </div>
        )
    }
}

export default DoctorsPagination;