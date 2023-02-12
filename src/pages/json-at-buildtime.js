import React from 'react';
import JSONData from "../content/blurb.json";

const JSONbuildtime = () => (
    <div>
        <h1>{JSONData.title}</h1>
        <p>{JSONData.content}</p> 
    </div>
  )
  export default JSONbuildtime