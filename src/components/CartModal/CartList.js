import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CartItem from './CartItem';

function CartList({
    items,
    counter,
    handleCard,
    totalPrice,
    handlePlus,
    handleMinus,
    count,
}) {
    return (
        <Container fluid>
            {items.map((item, i) => (
                <Row key={i}>
                    <CartItem
                        name={item.name}
                        price={item.price}
                        counter={counter}
                        count={item.count}
                        handleCard={handleCard}
                        handlePlus={handlePlus}
                        handleMinus={handleMinus}
                        id={i}
                    />
                </Row>
            ))}

            <Row className="text-center pt-4 pb-0">
                <p className="m-auto fw-bold">Total Price: ${totalPrice}</p>
            </Row>
        </Container>
    );
}

export default CartList;
