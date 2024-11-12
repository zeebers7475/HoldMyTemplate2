import PrimaryButton from "./PrimaryButton"

export default function Nav(props) {
    return (
        <nav>
            <div>
                <h1>Hold My Template App</h1>
            </div>
            <ul>
                <li><PrimaryButton handleOnClick={props.addInput} buttonTitle="Add Input" /></li>
                <li><PrimaryButton handleOnClick={props.addTextArea} buttonTitle="Add Text Box" /></li>
                <li>{props.edit ? <PrimaryButton handleOnClick={() => props.editTemplate(false)} buttonTitle="Save" /> : <PrimaryButton handleOnClick={() => props.editTemplate(true)} buttonTitle="Delete" />}</li>
                <li>{props.seeInstructions ? <PrimaryButton handleOnClick={() => props.changeSeeInstructions(false)} buttonTitle="?" /> : <PrimaryButton handleOnClick={() => props.changeSeeInstructions(true)} buttonTitle="?" />}</li>
            </ul>
        </nav>
    )
};