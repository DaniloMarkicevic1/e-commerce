import Button from 'react-bootstrap/Button';

function CartButton(props) {
    console.log(props.id);
    return <Button onClick={(props.id)=> props.onClick(props.id)}>{props.btnText}</Button>;
}

export default CartButton;
