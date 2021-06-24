/**
 * 207south: navbar.js
 * W P Mackenzie 2021
 */

import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import {useState} from 'react';
import './navbar.css';

/**
 * Website navigation bar.
  
  
   HTML Tags Used:
      div - Defines a division or section in the document. 
            Used as a container for HTML elements easily styled with CSS.
            Browsers always put a line break before and after a div.
      nav - Defines a set of navigation links. This element is
            intended only for major block of navigation links.
            Browsers can use this element to determine whether
            to omit the initial rendering of this content
            (e.g. screen readers for disabled users)

    React Router Components Used:
      Link: Allow navigation around the application, taking the following
            properties defined by the router as well as other properties which 
            would be passed to the hyperlink (<a>) tag (e.g. className, id, etc...)
            to: Represents the Link location
 */
function Navbar() {
  /* Hooks are cool
    So all of my learnings up to now would have been to create a class
    if I wanted to save state information and re-render when there
    was a change. With hooks, one can do this in a far simpler manner
    with simple function calls.

    The following is an example of using a hook, specifically a State
    Hook. Quite simply call the react function useState, pass in the default
    state, and it will return a variable with the current state and a function
    to call to change the state as an array. In this case the returned array is
    destructured into the varaible containing the current state (mobileMenuIsOpen)
    and the function to call to change the state (setMobileMenuIsOpen).

    Anytime the function which changes the state is called, the Navbar container
    function will be executed and the state varaible will contain the new value which
    will be rendered as defined by the JSX associated in the return function.

    There are other Hook functions and some rules and regulations around using them
    (such as don't use them at the same time as using a class with state)...more
    information and reasons for the rules and regulations can be found on reactjs.org
    https://reactjs.org/docs/hooks-intro.html
    */
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuIsOpen(false);
  const handleMobileMenuClick = () => setMobileMenuIsOpen(!mobileMenuIsOpen);

  return(
    <>
      <nav className="navigationBar">
          {/* 
            Display a link to the main page of the application.
              - When selected the mobile menu should close.
              - It should display the name of the website as well as the website icon
          */}
          <NavLink to='/' className='navigationBar-container-logo' onClick={closeMobileMenu} >
            207 South
          </NavLink>

        <div className="navigationBar-container">


          {/*
            Menu items - links to other pages in the application
            */}   
          <ul className={mobileMenuIsOpen ? 'navigationBar-menu isActive' : 'navigationBar-menu'}>
            <li className={mobileMenuIsOpen ? 'navigationBar-menuItem isActive' : 'navigationBar-menuItem'}>
              <Link to='/' className='navigationBar-link' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={mobileMenuIsOpen ? 'navigationBar-menuItem isActive' : 'navigationBar-menuItem'}>
              <Link to='/career' className='navigationBar-link' onClick={closeMobileMenu}>
                Career
              </Link>
            </li>
            <li className={mobileMenuIsOpen ? 'navigationBar-menuItem isActive' : 'navigationBar-menuItem'}>
              <Link to='/thoughts' className='navigationBar-link' onClick={closeMobileMenu}>
                Thoughts
              </Link>
            </li>
            <li className={mobileMenuIsOpen ? 'navigationBar-menuItem isActive' : 'navigationBar-menuItem'}>
              <Link to='/projects' className='navigationBar-link' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
          </ul>

          {/*
            Create a button to enable/disable the mobile menu
          */}
          <div className='navigationBar-container-menu_icon' onClick={handleMobileMenuClick}>
            <i className={mobileMenuIsOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

        </div> {/*navigationBar-container*/}

      </nav> {/*navigationBar*/}
    </>
  );
}

            //<i className='fab fa-typo3'>207 South</i>
export {Navbar};