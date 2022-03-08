import React, { useState } from "react";

export default function TextForm(props) {
 
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
    document.title="Text-Utils:UpperCase";
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
    document.title="Text-Utils:LowerCase";
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
    
  };
//   function for copying the content of form area
  const handleCopy=()=>{
      let content=document.getElementById("myBox");
    content.select();
    navigator.clipboard.writeText(content.value);
    props.showAlert("Content Copied","success")
    document.title="Text-Utils:Content Copied";
  }
//   function to remove extra spacers made use of regex of js
// split method is made used and the joined
  const removeXtraSpace=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success")
    document.title="Text-Utils:Extra Space Removed";
}

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='light'?'white':'#0a2351',color:props.mode==='light'?'black':'white'}}
            id="myBox"
            
            rows="8"
          ></textarea>
        </div>
        {/* disabled used so that unnecessay alerts an clicked are not done */}
        <button disabled={text.length===0}
          className="btn btn-primary btn-rounded mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleCopy}>
          CopyText
        </button>
        <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={removeXtraSpace}>
          RemoveExtraSpaces
        </button>
      </div>
      <div className="container my-3"style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>
          {/* filter method is used to remove the unwanted space with regular expression */}
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        {/* calculating the reading time */}
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        {/* what are we changing we can see here as a preview */}
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
