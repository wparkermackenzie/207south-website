import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import markdown from './sample.md';
import myPic from '../../../images/beachRainbow.jpg';

//const markdown = `# HEADING


function Sample() {

  const [displayText,setDisplayText] = useState('');
  
  const fetchIt = () =>
  {
    fetch(markdown).then((response) => response.text().then((text) => setDisplayText(text)));
  };

  // When mounted then update the displayText state
  useEffect(()=>{
    console.log('here');
    fetchIt();
  },[]);

  return(
    <>
    {/* 
    Argh how to get local pictures to work with react...
    This doesn't work displaying my own pictures from markdown
    I am missing something..
    */}
    <ReactMarkdown 
      transformImageUri={uri => uri.startsWith("http")? uri : `http://localhost:3000/${uri}`}>
      {displayText}
    </ReactMarkdown>
    <img src={myPic}/>
    </>
  );
}

export {Sample};
