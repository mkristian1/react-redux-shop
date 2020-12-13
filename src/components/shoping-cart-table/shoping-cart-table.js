import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bookAddedToCart, bookDecrease } from '../../actions';

const ShopingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const renderTrBody = (item, idx) => {

        const { id, title, count, total } = item;
      
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <ButtonGroup aria-label="Basic example">
                        <Button onClick={() => onIncrease(id)} variant="warning"><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button onClick={() => onDecrease(id)}  variant="success"><FontAwesomeIcon icon={faMinus} /></Button>
                        <Button onClick={() => onDelete(id)}  variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
                    </ButtonGroup>
                </td>
            </tr>
        )
    };

    return (
        <div className="shoping-cart-table">
            <h2>Ваши заказы</h2>
            <Table responsive variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Заказ</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderTrBody)}
                </tbody>
            </Table>
            <div className="total-count text-right">
                Общ. стоимость: {total}
            </div>
        </div>
    );
}
const mapStateToProps = ({ cartItems, orderTotal }) => {

    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => {
            dispatch(bookAddedToCart(id));
        },
        onDecrease:(id) => {
            dispatch(bookDecrease(id));
        },
        onDelete: (id) => {
            console.log(`onDelete ${id}`)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopingCartTable);