import React from 'react';
import CartModal from './CartModal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header({
    counter,
    cartItems,
    handleCard,
    clearAll,
    handlePlus,
    handleMinus,
    count,
    handleSubmit,
}) {
    return (
        <header className="d-md-flex flex-md-row justify-content-between align-items-center p-4">
            <p className="m-3 p-3 fw-bold border border-primary rounded m-md-0">
                E-commerce
            </p>
            <Form
                className="d-flex flex-row"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                }}
            >
                <Form.Control
                    type="text"
                    placeholder="Search..."
                    className="m-md-0 m-3"
                />

                <Button variant="primary" type="submit" className="m-md-0 m-3">
                    Search
                </Button>
            </Form>
            <div className="d-flex justify-content-center justify-content-md-unset align-items-center border border-primary rounded p-1 m-3 m-md-0">
                <p className="m-0">Items In Cart: {counter}</p>
                <CartModal
                    cartItems={cartItems}
                    handleCard={handleCard}
                    clearAll={clearAll}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                    count={count}
                />
            </div>
        </header>
    );
}

export default Header;
