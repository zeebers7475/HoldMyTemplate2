//import Image from "next/image";
"use client"
import { useState, useEffect } from 'react';
import Nav from './components/nav';
import Input from "./components/Input"
import TextBox from "./components/TextBox"



export default function Home() {
  const [k, setK] = useState(1);
  const [edit, setEdit] = useState(false)
  const [deleteButtonClass, setDeleteButtonClass] = useState("hidden")
  const [inputs, setInputs] = useState([{ key: 'I' + 0, title: "", textData: "" }]);
  const [textArea, setTextArea] = useState([{key: 'A' + 0, title: "", textData: "" }]);
  const [splitText, setSplitText] = useState([]);


  function addKey() {
    setK((prev) => prev + 1)
    return k
  }

  function addInput() {
    const newKey = addKey()
    setInputs([...inputs, { key:'I' + newKey, title: "", textData: "" }])
  }
  
  function addTextArea() {
    const newKey = addKey()
    setTextArea([...textArea, { key:'A' + newKey, title: "", textData: "" }])
  }

  function changeTitle(e) {
    const newTitle = e.target.value;
    const idKey = e.target.name;

    if(idKey.includes("I")) {
      setInputs(prevData => prevData.map(eachInput => eachInput.key === idKey ? { ...eachInput, title: newTitle } : eachInput))
    } else if(idKey.includes("A")) {
      setTextArea(prevData => prevData.map(eachBox => eachBox.key === idKey ? { ...eachBox, title: newTitle } : eachBox))
    }
  }

  function changeTextData(e) {
    const newTextData = e.target.value;
    const idKey = e.target.name;

    if(idKey.includes("I")) {
      setInputs(prevData => prevData.map(eachInput => eachInput.key === idKey ? { ...eachInput, textData: newTextData } : eachInput))
    } else if(idKey.includes("A")) {
      setTextArea(prevData => prevData.map(eachBox => eachBox.key === idKey ? { ...eachBox, textData: newTextData } : eachBox))
    }
  }

  function changeEditMode(boolean) {
    setEdit(boolean)
    console.log(edit)
  }

  function removeTemplate(e) {
    const idKey = e.target.value;
    if(idKey.includes("I")) {
      const newList = inputs.filter(eachInput => eachInput.key !== idKey);
      setInputs(newList)
    } else if(idKey.includes("A")) {
        const newList = textArea.filter(eachTextArea => eachTextArea.key !== idKey);
        setTextArea(newList)
    }
  }

  function changeSplitText(splitty) {
    setSplitText(splitty)
  }

  function removeSplitText() {
    setSplitText([])
  }

  useEffect(() => {
    if(edit) {
      setDeleteButtonClass("visible")
    } else setDeleteButtonClass("hidden")
  }, [edit])

  return (
    <div>
      <Nav addInput={addInput} addTextArea={addTextArea} editTemplate={changeEditMode} edit={edit}/>
      {inputs.map((input, index) => <Input idKey={input.key} index={index} title={input.title} textData={input.textData} changeTitle={changeTitle} changeTextData={changeTextData} deleteButtonClass={deleteButtonClass} removeTemplate={removeTemplate} changeSplitText={changeSplitText} splitText={splitText} removeSplitText={removeSplitText} />)}
      {textArea.map((area, index) => <TextBox idKey={area.key} index={index} title={area.title} textData={area.textData} changeTitle={changeTitle} changeTextData={changeTextData} deleteButtonClass={deleteButtonClass} removeTemplate={removeTemplate} />)}
    </div>
  );
}
