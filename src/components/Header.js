import React from 'react';
import CartModal from './CartModal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header({ counter, cartItems, handleCard, clearAll }) {
    return (
        <header className="d-flex flex-row justify-content-between align-items-center p-4">
            <p className="m-0 p-3 fw-bold border border-primary rounded">
                E-commerce
            </p>
            <Form className="d-flex flex-row">
                <Form.Control type="text" placeholder="Search..." />
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            <div className="d-flex align-items-center border border-primary rounded p-1">
                <p className="m-0">Items In Cart: {counter}</p>
                <CartModal
                    cartItems={cartItems}
                    handleCard={handleCard}
                    clearAll={clearAll}
                />
            </div>
        </header>
    );
}

export default Header;
