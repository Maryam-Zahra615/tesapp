import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lowercase", "success");
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext ='';
        setText(newtext)
    }
    const handleOnChange = (event)=>{
        // console.log("on Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'blue'}}></div>
           <h1>{props.heading} </h1>
           <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgrouncolor: props.mode==='dark'?'grey':'black',color: props.mode==='dark'?'black':'white'}} id="myBox" rows="8"></textarea>
           </div>
          <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to Uppercase</button>
          <button className="btn btn-primary mx-3" onClick={handleLoClick}>convert to Lowercase</button>
          <button className="btn btn-primary mx-3" onClick={handleClearClick}>clear text</button>
          <div/>
          <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"enter something here in the text box to preview it"}</p>
          </div>
      </>
  )
}
