import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CardItem from './CardItem';

function CardList({ items, counter, handleCard }) {
    return (
        <Container fluid className="mb-3">
            <Row>
                {items.map((item, i) => (
                    <Col key={i}>
                        <CardItem
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            counter={counter}
                            handleCard={handleCard}
                            id={i}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardList;
