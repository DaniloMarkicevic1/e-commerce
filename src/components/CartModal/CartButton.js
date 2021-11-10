import Button from 'react-bootstrap/Button';

function CartButton(props) {
    return (
        <Button id={props.id} onClick={(e) => props.onClick(e.target.id)}>
            {props.btnText}
        </Button>
    );
}

export default CartButton;
