import Button from 'react-bootstrap/Button';

function AddToCartButton(props) {
    return (
        <Button
            id={props.id}
            onClick={(e) => {
                props.handleCard(e.target.id);
            }}
        >
            {props.btnText}
        </Button>
    );
}

export default AddToCartButton;
