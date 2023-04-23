import React,{useState} from 'react'
export default function Textform(props) {
 
  const handleClick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to Uppercase","success");
  }
  const extraspace=()=>{
  var newtext=text.split(/[ ]+/);
  setText(newtext.join(' '));
  props.showalert("Extra Spaces are removed","success");
  }
  const copytext=()=>{
    let text=document.getElementById("mytext");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text is copied","success");
  }
  const clear=()=>{
    let newtext=' ';
    setText(newtext);
    props.showalert("Text is cleared","success");
  }
  const handleloClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to Lowercase","success");
  }
  const handle=(event)=>{
    setText(event.target.value);
  }
  const [text,setText]=useState("");
  return (<>
    <div className='container' style={{backgroundColor:props.mode==='dark'?'black':'white'}}>
<div className="mb-3">
    <h2 style={{color:props.mode==='dark'?'white':'black'}}>{props.content}</h2>
  <textarea className="form-control" value={text} id="mytext" rows="13" onChange={handle} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
  
  <div>
  <button className="btn btn-primary my-3 mx-5 "onClick={handleClick}>Click To Convert Into Uppercase</button>
  <button className="btn btn-primary my-3 mx-5 "onClick={handleloClick}>Click To Convert Into Lowercase</button>
  <button className="btn btn-primary my-3 mx-5 "onClick={clear}>clear Text</button>
  <button className="btn btn-primary mx-5" onClick={copytext}>Copy Text</button>
  <button className="btn btn-primary" onClick={extraspace}>Extra Spaces</button>
  </div>
</div>
</div>
    <div className="container"style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>
      <h1 >Data You Entered</h1>
      <p >{text.split(" ").length-1} words and {text.length} of charecters</p>
      <p style={{color:props.mode==='dark'?'white':'black'}}>Time to read this Data{0.008*(text.split(" ").length-1)}</p>
      <p >Preview of lowercase</p>
      <p >{text.toLowerCase()}</p>
      <p >Preview to Uppercase</p>
      <p >{text.toUpperCase()}</p>
    </div>
    </>
  )
}
Textform.defaultProps={
    content:'enter the content as .....'
}