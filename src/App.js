import React, { useState } from 'react';
import marked from 'marked';

import './App.css';
 
function App() {
  const [markdown, setmarkdown]= useState('');

  const updatMarkdown = (value)=>{
    setmarkdown(value)
  };
 const  rawMarkup = () => {
  
    let rawMarkup = marked(markdown);
    return { __html: rawMarkup };
  }
  return (

    <div className="App">
       <div className="form-group">
    <label  >markdown input</label>
    <input type="text" className="form-control"  placeholder="Enter email" value={markdown} onChange={(event)=>{  updatMarkdown(event.target.value)}}/>
  </div>
  <div>
    <h2>markdown output</h2>
    <div dangerouslySetInnerHTML={rawMarkup()} ></div>
    </div>
  </div>
  
  );
}

export default App;
