import React from 'react';
import {Link} from 'react-router-dom';
import { Projects } from '../data/projects.js';

function Highlights() {
  return(
    <h1>Home Hightlights about Me</h1>
  );
}

function Project(props) {
  return (
    <li className='project'>
      <Link className='project_link' to={props.entry.page}>
        <figure>
          <img src={props.entry.image} alt={props.entry.name} className='project_image' />
          <figcaption>{props.entry.description}</figcaption>
        </figure>
      </Link>
    </li>
  );
}

function Topic(props) {
  const projectsToRender = props.projectList;
  const listItems = projectsToRender.map((entry)=>
    <Project key={entry.name} entry={entry}/> );
  return(
    <div className='topic'>
      <h2 className='topic_heading'>{props.name}</h2>
      <p className='topic_description'>{props.description}</p>
      <ul className='project_list'>
        {listItems}
      </ul>
    </div>
  )
}

function ProjectList () {
  let projects = new Projects();
  let projectList = [];
  let r = [];
  let topicName;
  let topicDescription;
  let entry;
  for(entry of projects) {
    if( undefined === topicName) {
      topicName = entry.topicName;
      topicDescription = entry.topicDescription;
    }

    if( entry.topicName === topicName){
      projectList.push(entry);
    }
    else {
      r.push(<Topic key={topicName} name={topicName} description={topicDescription} projectList={projectList}/>);
      projectList = [];
      projectList.push(entry);
      topicName= entry.topicName;
      topicDescription = entry.topicDescription;
    }
  }

  if(entry !== undefined && projectList.length > 0) {
    r.push(<Topic key={topicName} name={topicName} description={topicDescription} projectList={projectList} />);
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
      <section className='highlights_container'>
        <Highlights/>
      </section>
      <section className='projects_container'>
        <ProjectList/>
      </section>
    </>
  );
}

export {Home};