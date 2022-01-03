import React from 'react';
import {Link} from 'react-router-dom';

function Card(props) {
  let str = [<p>hello</p>];
  str.push( <p>parker</p>);
  return <div>{str}</div>;
  //return( <><div>{str}</div></> );
}

export {Card};