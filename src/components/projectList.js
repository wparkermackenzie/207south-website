import React from 'react';
import {Link} from 'react-router-dom';
import { Projects } from '../data/projects.js';
import './projectList.css';

function Project(props) {
  return (
    <li className='project'>
      <Link className='project_link' to={props.entry.page}>
        <figure className='project_link_figure'>
          {/* Note the nifty trick using require to tell react/webpack
              to bring along static images which are defined via data.
              Thank you stackoverflow... I would have beat my head 
              against the wall way to long to figure this one out...
              https://stackoverflow.com/questions/62192049/how-do-i-dynamically-import-images-in-react
          */}
          <div className='project_link_figure_image_container'>
            <img src={require('../images/' + props.entry.image).default} alt={props.entry.name} className='project_link_figure_image' />
            <span className='project_link_figure_description'>{props.entry.description}</span>
          </div>
          <figcaption className='project_link_figure_caption'>{props.entry.name}</figcaption>
        </figure>
      </Link>
    </li>
  );
}

function Topic(props) {
  const projectsToRender = props.projectList;
  /*  React uses keys to identify which items in a list have changed.
      Generally the key should be with the list item...HOWEVER,
      if the list item is extraced with another component (for 
      example using the Project component below), the key should
      be with the component rater than the <li> list item itself.
      This is a little bit of fun and excitement in the fine print 
      which can cause 10s of minutes of head scratching...
      https://reactjs.org/docs/lists-and-keys.html */
  const listItems = projectsToRender.map((entry)=>
    <Project key={entry.name} entry={entry}/> );
  return(
    <div className='topic'>
      <h2 className='topic_heading'>{props.name}</h2>
      <p className='topic_description'>{props.description}</p>
      <div className='project_list_container'>
        <ul className='project_list'>
          {listItems}
        </ul>
      </div>
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

export {ProjectList};