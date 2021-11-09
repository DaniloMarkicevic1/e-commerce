import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CartIcon from '../assets/images/shopingCart.jpg';
import CartList from './CartList';

function MyVerticallyCenteredModal(props) {
    let totalPrice = 0;
    let regEx = /\D/g;
    props.props.cartItems.forEach((item) => {
        let price = item.price.replace(regEx, '');
        totalPrice += +price;
    });

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Cart Items
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <CartList
                    items={props.props.cartItems}
                    handleCard={props.props.handleCard}
                    totalPrice={totalPrice}
                />
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-between">
                <Button onClick={props.props.clearAll}>Clear ALL</Button>
                <Button onClick={props.onHide}>Continue To Checkout</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function CartModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <img
                width="50px"
                src={CartIcon}
                alt="cart icon"
                onClick={() => setModalShow(true)}
            />
            <MyVerticallyCenteredModal
                props={props}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default CartModal;
