import React from 'react';
import {ProjectList} from '../components/projectList.js';

function Highlights() {
  return(
    <h1>Hello Hightlights about Me</h1>
  );
}

function Home() {
  return(
    <>
      <section className='highlights_container'>
        <Highlights/>
      </section>
      <section className='projects_container'>
        <h1>Projects</h1>
        <ProjectList/>
      </section>
    </>
  );
}

export {Home};