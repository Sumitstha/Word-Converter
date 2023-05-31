import React,{useState} from 'react'



export default function Myform(prop) {
  const handleUp=()=>{
    // console.log("button is clicked");
    // setText("This is changed");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handlelow=(event)=>{
    let newText=text.toLowerCase();
    setText(newText);
  }

const change=(event)=>{
  console.log("Change is typed");
  setText(event.target.value);
}

  const[text,setText]=useState("Enter words");
  // setText("helooooooo");
  return (
    <>
    <div>

<h1>{prop.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={change} id="textit" rows="10"></textarea>
</div>

<button className="btn btn-primary" onClick={handleUp}>Convert to Uppercase</button>

<button className="btn btn-primary mx-4" id="btnlow" onClick={handlelow}>Convert to Lowercase</button>
    </div>

    <div className="container">
<h1>Summary:</h1>
<h4>There are {text.split(" ").length} words.</h4>
<h4>There are {text.length} characters.</h4>
<h3><u>Preview:</u></h3>

      <p>{text}</p>
    </div>
    </>
  )
}
