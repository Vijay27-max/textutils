import React, { useState } from 'react'

export default function TextFrom(props) {
    const handleUpClick =() =>{
        let newTxt = text.toUpperCase();
        setText(newTxt);
        props.showAlert("Converted UpperCase", "success");
    }

    const handleLoClick =() =>{
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showAlert("Converted Lowercase", "success");
    }

    const handleClear = ()=>{
        let newTxt = '';
        setText(newTxt);
        props.showAlert("Text cleared", "success");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied", "success");
    }

    const handleOnChange= (event)=>{
        setText(event.target.value)
    }
    const handleExtraSpace = ()=>{
        let newTxt = text.split(/[ ]+/)
        setText(newTxt.join(" "));
        props.showAlert("Removed extra space", "success");
    }

    const[text, setText] = useState('');
  return (
    <> 
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="containe mb-3">
        <textarea value={text} className="form-control" onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'#677D6A':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove extraSpace</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) =>{return element.length !==0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) =>{return element.length !==0 }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it'}</p>
    </div>
    </>
  )
}
