import React from 'react';
import { Projects } from '../data/projects.js';

function displayProjectNoteCards () {
  let projects = new Projects();
  for(let entry of projects) {
    console.log(entry.toString());
  }

  // Need to create a unique react key
  // Need to look at exceptions... it may not have displayImage, etc...
  // Need to validate data in test mode...
  // Create a unit test
  // Create an object which defines the project's paths
  // Validate the json data and limit the max number of items to parse
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