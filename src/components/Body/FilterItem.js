function FilterItem(props) {
    return (
        <div onClick={(e) => props.filter(e.target.innerHTML)}>
            {props.name}
        </div>
    );
}
// props.filter(e.target.innerHTML

export default FilterItem;
