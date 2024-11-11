import DeleteButton from "./DeleteButton"
import PrimaryButton from "./PrimaryButton"

export default function Input(props) {

    const copyTextData = (e) => {
        navigator.clipboard.writeText(e.target.value)
    }

    const splitText = () => {
        const text = props.textData;
        const separators = [" ", ",", ".", "!", "?", "_", "\\-", "/", "|"]

        const regex = new RegExp(`[${separators.join('')}]+`)

        const arrSplit = text.split(regex);

        props.changeSplitText(arrSplit)
    }

    const splitty = props.splitText.map((eachWord, index) => {
        return (
            <div key={index}>
                <input className="title" type="text" value={eachWord} />
                <PrimaryButton buttonTitle="Copy Text" value={eachWord} handleOnClick={copyTextData}/>
                <DeleteButton deleteButtonClass={props.deleteButtonClass} handleOnClick={props.removeSplitText} />
            </div>  
        ) 
      })

    return (
        <div id={props.idKey} key={props.idKey}>
            <input className="title" type="text" name={props.idKey} value={props.title} onChange={props.changeTitle} placeholder={`Title ${props.index + 1}`} />
            <br/>
            <input type="text" onChange={props.changeTextData} name={props.idKey} value={props.textData} />
            <PrimaryButton buttonTitle="Copy Text" value={props.textData} handleOnClick={copyTextData} />
            {props.index === 0 ? <PrimaryButton buttonTitle="Split Text" handleOnClick={splitText} /> : null}
            <DeleteButton deleteButtonClass={props.deleteButtonClass} handleOnClick={props.removeTemplate} value={props.idKey} />
            <div className="split-text">
                {props.splitText && props.index === 0 ? splitty : null}
            </div>
            
        </div>
    )
}

