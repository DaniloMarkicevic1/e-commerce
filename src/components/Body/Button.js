import Button from 'react-bootstrap/Button';

function AddToCartButton(props) {
    return (
        <Button
            variant={props.variant}
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
