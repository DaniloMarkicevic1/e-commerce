import Button from './Button';
import Card from 'react-bootstrap/Card';

function CartItem({ id, name, price, counter, handleCard }) {
    return (
        <Card style={{ width: '100%' }} className="mx-auto mt-3">
            <Card.Body className="d-flex flex-row align-items-center">
                <Card.Title className="m-auto px-3">{name}</Card.Title>
                <Card.Text className="m-auto">
                    Description: Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Text className="m-auto px-2">{price}</Card.Text>
                <Button
                    variant="danger"
                    counter={counter}
                    handleCard={handleCard}
                    id={id}
                    btnText="Remove From Cart"
                />
            </Card.Body>
        </Card>
    );
}

export default CartItem;
