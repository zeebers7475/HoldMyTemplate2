//import Image from "next/image";
"use client"
import { useState } from 'react';
import Nav from './components/nav';
import Input from './components/input';
import TextArea from './components/textArea';



export default function Home() {
  const [k, setK] = useState(1);
  const [inputs, setInputs] = useState([{key: 'I' + 0, input: <Input />}]);
  const [textArea, setTextArea] = useState(<textArea />);

  // function mapInputs() {
  //   inputs.map((input) => {
  //     console.log(input)
  //   })
  // }

  function addKey() {
    setK((prev) => prev + 1)
    return k
  }

  function addInput() {
    const newKey = addKey()
    setInputs([...inputs, {key:'I' + newKey, input: <Input addKey={newKey} />}])
  }
  
  




  return (
    <div>
      <Nav addInput={addInput}/>
      {inputs.map((input) => <div id={input.key}>{input.input}</div>)}
      {textArea}
    </div>
  );
}
