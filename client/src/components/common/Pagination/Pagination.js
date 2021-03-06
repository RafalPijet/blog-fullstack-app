import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

class Pagination extends React.Component {

    state = {
        isActive: this.props.isActive === undefined || this.props.isActive,
        presentPage: this.props.initialPage,
        leftArrowIsHidden: true,
        rightArrowIsHidden: false
    };

    componentDidMount() {

        const {initialPage, pages} = this.props;
        initialPage > 1 ? this.setState({leftArrowIsHidden: false}) :
            this.setState({leftArrowIsHidden: true});
        initialPage < pages ? this.setState({rightArrowIsHidden: false}) :
            this.setState({rightArrowIsHidden: true})
    }

    changePage = newPage => {
        const {onPageChange} = this.props;

        this.setState({presentPage: newPage});
        onPageChange(newPage);
    };

    changeWithArrow = async isLeft => {
        const {presentPage} = this.state;
        const {onPageChange} = this.props;
        isLeft ? await this.setState({presentPage: presentPage - 1}) :
            await this.setState({presentPage: presentPage + 1});
        onPageChange(this.state.presentPage);
    };

    render() {
        const {pages} = this.props;
        const {presentPage, leftArrowIsHidden, rightArrowIsHidden, isActive} = this.state;
        const {changePage, changeWithArrow} = this;

        return (
            <div hidden={!isActive} className="pagination">
                <ul className="pagination__list">
                    <li className={`pagination__list__item`}
                        onClick={() => changeWithArrow(true)}
                        hidden={leftArrowIsHidden}>{"<"}</li>
                    {[...Array(pages)].map((element, page) =>
                        <li
                            key={++page}
                            onClick={() => changePage(page)}
                            className={`pagination__list__item${((page) === presentPage) ?
                                ' pagination__list__item--active' : ''}`}>
                            {page}
                        </li>
                    )}
                    <li className={`pagination__list__item`}
                        onClick={() => changeWithArrow(false)}
                        hidden={rightArrowIsHidden}>{">"}</li>
                </ul>
            </div>
        );
    }
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    initialPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
    isActive: PropTypes.bool
};

export default Pagination;
