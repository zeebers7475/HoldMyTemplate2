import PrimaryButton from "./PrimaryButton";
import DeleteButton from "./DeleteButton";

const TextArea = (props) => {

    const copyTextData = (e) => {
        navigator.clipboard.writeText(e.target.value)
    }

    return (
        <div>
            <input className="title" type="text" name={props.idKey} value={props.title} onChange={props.changeTitle} placeholder={`Title ${props.index + 1}`}/>
            <br/>
            <div id={props.idKey} key={props.idKey} className="text-box">
                <textarea onChange={props.changeTextData} name={props.idKey} value={props.textData} ></textarea>
                <PrimaryButton buttonTitle="Copy Text" handleOnClick={copyTextData} value={props.textData} />
                <DeleteButton deleteButtonClass={props.deleteButtonClass} handleOnClick={props.removeTemplate} value={props.idKey}/>
            </div>
        </div>
    )
}

export default TextArea;