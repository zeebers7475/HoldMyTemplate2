import DeleteButton from "./DeleteButton"
import PrimaryButton from "./PrimaryButton"

export default function Input(props) {

    let copyButton;

      if(props.isMobile) {
        copyButton = <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C5.89543 1 5 1.89543 5 3V4H4C2.89543 4 2 4.89543 2 6V13C2 14.1046 2.89543 15 4 15H9C10.1046 15 11 14.1046 11 13V12H12C13.1046 12 14 11.1046 14 10V3C14 1.89543 13.1046 1 12 1H7ZM10 12H7C5.89543 12 5 11.1046 5 10V5H4C3.44772 5 3 5.44772 3 6V13C3 13.5523 3.44772 14 4 14H9C9.55228 14 10 13.5523 10 13V12ZM6 3C6 2.44772 6.44772 2 7 2H12C12.5523 2 13 2.44772 13 3V10C13 10.5523 12.5523 11 12 11H7C6.44772 11 6 10.5523 6 10V3Z" fill="currentColor"></path></svg>
      } else copyButton = "Copy Text"

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
            <div key={index} className="flex">
                <input type="text" value={eachWord} />
                <PrimaryButton buttonTitle={copyButton} value={eachWord} handleOnClick={copyTextData}/>
                <DeleteButton deleteButtonClass={props.deleteButtonClass} handleOnClick={props.removeSplitText} />
            </div>  
        ) 
      })

    return (
        <div id={props.idKey} key={props.idKey}>
            <div className="title">
                <input type="text" name={props.idKey} value={props.title} onChange={props.changeTitle} placeholder={`Title ${props.index + 1}`} />
            </div>
            <div className="flex">
                <input type="text" onChange={props.changeTextData} name={props.idKey} value={props.textData} />
                <PrimaryButton buttonTitle={copyButton} value={props.textData} handleOnClick={copyTextData} isMobile={props.isMobile} />
                {props.index === 0 ? <PrimaryButton buttonTitle="Split Text" handleOnClick={splitText} /> : null}
                <DeleteButton deleteButtonClass={props.deleteButtonClass} handleOnClick={props.removeTemplate} value={props.idKey} />
            </div>
            <div className="split-text">
                {props.splitText && props.index === 0 ? splitty : null}
            </div>
        </div>
    )
}

