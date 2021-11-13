import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterItem from './FilterItem';
import Button from 'react-bootstrap/Button';

const names = ['Dell', 'BenQ', 'Acer', 'LG', 'Hp'];
function Filter(props) {
    return (
        <Container>
            <Row>
                {names.map((name, i) => (
                    <Col key={i} className="my-auto">
                        <FilterItem
                            className="hover"
                            name={name}
                            filter={props.filter}
                        />
                    </Col>
                ))}
                <Button className="w-25" onClick={props.removeFilter}>
                    Remove Filter
                </Button>
            </Row>
        </Container>
    );
}

export default Filter;
