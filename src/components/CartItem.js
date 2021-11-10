import { useState } from 'react';
import Button from './Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CartButton from './CartButton';

function CartItem({ id, name, price, counter, handleCard }) {
    const [itemCount, setItemCount] = useState(1);

    function increaseHandler() {
        setItemCount(itemCount + 1);
    }
    function decreaseHandler() {
        if (itemCount === 0) {
            return;
        } else {
            setItemCount(itemCount - 1);
        }
    }
    return (
        <Card style={{ width: '100%' }} className="mx-auto mt-3">
            <Card.Body className="d-flex flex-row ">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <Card.Title className="m-auto px-3">
                                {name}
                            </Card.Title>
                        </Col>
                        <Col>
                            <Card.Text className="m-auto">
                                Description: Some quick example text to build on
                                the card title and make up the bulk of the
                                card's content.
                            </Card.Text>
                        </Col>
                        <Col className="d-flex flex-row">
                            <Card.Text className="m-auto px-2">
                                {price}
                            </Card.Text>
                            <CartButton onClick={increaseHandler} btnText="+" />
                            <div className="my-auto mx-2">{itemCount}</div>
                            <CartButton onClick={decreaseHandler} btnText="-" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button
                                variant="danger"
                                counter={counter}
                                handleCard={handleCard}
                                id={id}
                                btnText="Remove From Cart"
                            />
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default CartItem;
