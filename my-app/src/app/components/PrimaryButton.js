
const PrimaryButton = (props) => {

    return (
        <>
            <button className="primary-button" onClick={props.handleOnClick} value={props.value}>{props.buttonTitle}</button>
        </>
    )
}

export default PrimaryButton;