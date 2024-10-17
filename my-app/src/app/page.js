//import Image from "next/image";
"use client"
import { useState } from 'react';
import Nav from './components/nav';
import Input from './components/input';
import TextArea from './components/textArea';


export default function Home() {
  const [input, setInput] = useState(<Input />);
  const [textArea, setTextArea] = useState(<textArea />);

  
  return (
    <div>
      <Nav />
      {input}
      {textArea}
    </div>
  );
}
