import Button from './Button';
import Card from 'react-bootstrap/Card';

function CardItem({ id, img, name, price, counter, handleCard }) {
    return (
        <Card style={{ width: '18rem' }} className="mx-auto mt-3">
            <Card.Img
                variant="top"
                src={img}
                height="250px"
                alt="image of monitor"
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Description: Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button
                    counter={counter}
                    handleCard={handleCard}
                    id={id}
                    btnText="Add To Cart"
                />
            </Card.Body>
        </Card>
    );
}

export default CardItem;
