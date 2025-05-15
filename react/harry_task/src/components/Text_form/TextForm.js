import React ,  { useState } from "react";
export default function TextFrom(props){
    const [text, setText] = useState('where is text');
    setText("sdfsdfs");
    return (
    <>
      <div className="row">
        <div className="col-12">
            <div className="container">
                    <div className="form-group">
                        <textarea className="form-control mb-3" value={text} id="myBox"/>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary me-2"> change to upper case </button>
                        <button className="btn btn-primary me-2"> change to lower case </button>
                        <button className="btn btn-primary me-2"> change to text underline </button>
                    </div>
            </div>
        </div>
      </div>
    </>
    )
}