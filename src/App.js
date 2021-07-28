import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Footer} from './components/footer.js';
import {Navbar} from './components/navbar.js';
import {Home} from './pages/home.js';
import {Sample} from './pages/projects/sample/sample.js';

/**
 * Entry point function component for the react application.
 * 
 * @returns 
 */
function App() {
    /*
      Return multiple elements in a fragment without adding extra
      nodes to the Document Object Model.
      <> </> is a shortcut for <React.Fragment> </React.Fragment>
    */
    return(
        <>
            {/*
              An HTML Router is used to forward an incoming request to the 
              correct component, allowing an application to have multiple 
              views. For example, if the application www.myapp.com a request
              is made to www.myapp.com/myorders the application finds
              the path called /myorders appended to the URL. The router
              checks to see if there is a component associated with
              /myorders. If the application has a handler for this path,
              its component (function/class) is invoked. The react router allows
              this to happen while preserving user state.

              Anything outside of the BrowserRouter router component will be
              rendered on every page. As well as anything just before the 
              Switch. It is unclear to me if one method is prefered over the
              other or why. 

              The Switch component renders the first route which matches a 
              pattern. Given that, order is important; always place a more
              specific route before a less specific route. As such the '/' path
              should always go last as it matches any route and will render any
              page. Unless the exact keyword is used; then the route always matches
              the exact path provided.

              More information: https://reactrouter.com/web/guides/quick-start 
            */}
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/' exact >
                      <Home />
                    </Route>
                    <Route path='/pages/projects/sample' exact>
                      <Sample />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;