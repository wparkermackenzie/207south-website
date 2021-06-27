import React from 'react';
//import {Card} from '../components/card.js';
//import * as projectDb from '../data/projects.json';
import data from '../data/projects.json';

function displayProjectNoteCards () {
  //const {projectJSON} = projectDb; 
  //const parsedProjectNotes = JSON.parse(projectJSON);
  //console.log(`parsed: ${parsedProjectNotes}`);
  const jsonStr = JSON.stringify(data);
  //console.log(`jsonText: ${projectJSON}`);
  console.log(`jsonStr: ${jsonStr}`);
  console.log(`stuff: ${data.community.displayName}`);
  // Create an object to parse the data in the data directory
  data.community.projects.forEach( element => {console.log(element.displayName)});
}

function Home() {
  return(
    <>
      <h1>Home</h1>
      {displayProjectNoteCards()}
    </>
  );
}

export {Home};