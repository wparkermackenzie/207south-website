import React from 'react';
import {Link} from 'react-router-dom';
import { Projects } from '../data/projects.js';

function Highlights() {
  return(
    <h1>Home Hightlights about Me</h1>
  );
}
function Project(props) {
  let key = 9; //TBD Hash name and topic name
  return(
    <>
      <li className='project'>
        <Link className='project_link' to={props.entry.page}>
          <figure>
            <img src={props.entry.image} alt={props.entry.name} className='project_image'/>
            <figcaption>{props.entry.description}</figcaption>
          </figure>
        </Link>
      </li>
    </>
  );
}

function Topic(props) {
  let key = 10; // TBD
  return(
    <div key={key} className='topic'>
      <h2 className='topic_heading'>{props.entry.topicName}</h2>
      <p className='topic_description'>{props.entry.topicDescription}</p>
      {props.projectJsx}
    </div>
  )
}

function ProjectList () {
  let projects = new Projects();
  let projectJsx = [];
  let r = [];
  let topicNamePrev;
  let entry;
  for(entry of projects) {
    if( topicNamePrev !== undefined && entry.topicName !== topicNamePrev ) {
      r.push(<Topic entry={entry} projectJsx={projectJsx}/>);
      projectJsx = [];
      topicNamePrev = entry.topicName;
      projectJsx.push(<Project entry={entry} />);
    }
    else {
      topicNamePrev = entry.topicName;
      projectJsx.push(<Project entry={entry} />);
    }
  }
  if(entry !== undefined && projectJsx.length > 0) {
    r.push(<Topic entry={entry} projectJsx={projectJsx} />);
  }
  return(r);

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
      <section>
        <Highlights/>
      </section>
      <section>
        <ProjectList/>
      </section>
    </>
  );
}

export {Home};