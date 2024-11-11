
const SecondaryButton = (props) => {

    return (
        <>
            <button className={"secondary-button " + props.deleteButtonClass} onClick={props.handleOnClick} value={props.value}>{props.buttonTitle}</button>
        </>
    )
}

export default SecondaryButton;