import SecondaryButton from "./SecondaryButton"

const DeleteButton = (props) => {



    return (
        <SecondaryButton deleteButtonClass={props.deleteButtonClass} buttonTitle="X" value={props.value} handleOnClick={props.handleOnClick}/>
    )
}

export default DeleteButton;