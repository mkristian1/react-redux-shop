import React from 'react';
import { Badge, Button, Col, Row } from 'react-bootstrap';
import './book-list-item.css'

const BookListItem = ({ book, onAddedToCart }) => {
    return (
        <div className="book-list-item">
            <Row>
                <Col md={2}><img src={book.imgUrl} alt={book.title} /></Col>
                <Col>
                    <p className="book-title mb-0">Название:  <strong>{book.title}</strong></p>                 
                    <p className="book-author mb-1">Автор: <strong>{book.author}</strong></p>
                    <p className="book-price">Цена: <Badge variant="warning"><strong>{book.price}</strong></Badge></p>
                    <Button onClick={onAddedToCart}>Добавить в корзину</Button>
                </Col>
            </Row>


        </div>
    )
}

export default BookListItem;
