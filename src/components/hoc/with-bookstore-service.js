import React from 'react';
const { BookstoreServiceConsumer } = require("../bookstore-service-context");

const WithBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props} bookstoreService={bookstoreService} />
                        );
                    }
                }
            </BookstoreServiceConsumer >
        );
    }
}

export default WithBookstoreService;