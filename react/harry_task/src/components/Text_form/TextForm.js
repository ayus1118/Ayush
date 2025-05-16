import React ,  { useState } from "react";
export default function TextFrom(props){
    const handleUpclick = () => {
      let newtext = text.toUpperCase();
      setText(newtext); 
    }
    const handleLwclick = () => {
      let newtext = text.toLocaleLowerCase();
      setText(newtext); 
    }
     const handleonchange = (event) => {
      setText(event.target.value);
    }
    const handleclear = () =>{
      setText("");
    }
    handleEmail = () =>{

    }
    const [text, setText] = useState('where is text');
    return (
    <>
      <div className="row">
        <div className="col-12">
            <div className="container">
                    <div className="form-group">
                        <textarea className="form-control mb-3" onChange={handleonchange} value={text} id="myBox"/> 
                        {/* to edit text we neend to add fuction to listen this function */}
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary me-2" onClick={handleUpclick} > change to upper case </button>
                        <button className="btn btn-primary me-2" onClick={handleLwclick}> change to lower case </button>
                        <button className="btn btn-primary me-2" onClick={handleclear}> clear text</button>
                        <button className="btn btn-primary me-2" onClick={handleEmail}> email extractor</button>
                    </div>
            </div>
            <div className="container">
              <h3>you text summmary</h3>
              <p>{text.split(" ").length} words and {text.length} charaters</p>
              <p>{0.008 * text.split(" ").length} Mintues read</p>
              <h2>Preview</h2>
              <p>{text}</p>
            </div>
        </div>
      </div>
    </>
    )
}