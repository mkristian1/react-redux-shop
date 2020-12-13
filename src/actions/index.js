const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}
const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookDecrease = (bookId) => {
    return {
        type: 'BOOK_DECREASE_TO_CART',
        payload: bookId
    }
}

const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
}

export {
    fetchBooks, bookAddedToCart, bookDecrease
}