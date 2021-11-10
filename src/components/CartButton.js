import Button from 'react-bootstrap/Button';

function CartButton(props) {
    return <Button onClick={props.onClick}>{props.btnText}</Button>;
}

export default CartButton;
