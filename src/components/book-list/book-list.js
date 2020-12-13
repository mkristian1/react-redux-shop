import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { bindActionCreators, BindActionCreators } from 'redux';
import { fetchBooks, bookAddedToCart } from '../../actions';
import WithBookstoreService from '../hoc/with-bookstore-service';
import './book-list.css';
import { Container, Spinner } from 'react-bootstrap';
import ErrorIndicator from '../error-indicator/error-indicator';

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map(book => {
                    return (
                        <li key={book.id} ><BookListItem book={book}  onAddedToCart={() => onAddedToCart(book.id)} /></li>
                    )
                })
            }
        </ul>
    )
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) { return <Spinner animation="border" variant="warning" /> };
        if (error) { return <ErrorIndicator /> };

       return <BookList books={books}  onAddedToCart={onAddedToCart} />;
    }
}



const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
};

export default WithBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));