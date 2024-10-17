

export default function Nav(props) {
    return (
        <nav>
            <ul>
                <li><h1>Hold My Template</h1></li>
                <li><button onClick={props.addInput}>Add Input</button></li>
                <li><button onClick={props.addResponse}>Add Text Box</button></li>
                <li><button onClick={props.save}>Save</button></li>
                <li><button onClick={props.edit}>Edit</button></li>
            </ul>
        </nav>
    )
};