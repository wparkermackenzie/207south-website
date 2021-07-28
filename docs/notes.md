# Commands
```
# Create a react foundation using create-react-app
sudo npm install -g create-react-app
npx create-react-app 207South-website

# Install react router
cd 207South-website
npm install react-router-dom


# Get rid of stuff
git rm reportWebVitals.js setupTests.js index.css logo.svg
truncate -s 0 App.css App.js index.js
mkdir components images videos

# Run the website locally
npm start
```

# create-react-app
For the project to build, these files must exist:
- public/index.html : page template
- src/index.js : JavaScript entry point

Only files inside of src are processed by webpack. As such all js and css must exist in this directory.

Top level directories and files can be created; however they will not be included in the production build. This is great for things like documentation and this note.

# Directory Structure
- Root
- public
- src

# Icons
Icons generated using [favicon.io Icon Generator](https://favicon.io/favicon-generator/)
- Text: 207
- Background: Circle
- Font Family: Merriweather Sans
- Font Size: 48
- Font Color: #FFF
- Background Color: #00F

# Git lfs
Some of the files are stored using the Git Large File System extension

To track large files
'''
## To track large files
git lfs track "*.jpg"

## Make sure to include in git attributes
git add .gitattributes

## Just add and commit files as normally would there after
git add myfile.jpg
'''

# Content Generation Using Markdown
Here is the deal, for content generation... I really wanted a way of developing
content in something which was not HTML. The reason is that the generation of the
markup gets in the way of the creativity needed to develop content, it stops 
creativity flow. Long story short, I am just going to start content creation in
html and will work towards something better later (MVP).

Markdown seemed like a reasonable compromise, allowing quick stylization while
not interrupting the flow of creativity. However, all good plans...

There are a couple of ways that I liked for converting markdown into html for
ingestion for a react application. The first is the package called react-markdown.
With this package, with just a little work one can display a markdown file. 
A couple of reasons for not running with it:
1st. I could not get it to work displaying local images. If I specified an image
which my website supplies, it would not display it in the local browser. 
2nd. I really wanted to create a table of contents and there is no great way to
do this from this package.
Sample code for this was committed should I ever want to revisit.

Another way would be to create a markdown to 207-website generator script. If
I were to go this route I would use the showdown package for converting the 
markdown to html. Then I would load the html into a dom and parse it in the 
script for headers to generate information for a table of contents. From there
the script would modify a file which has routes and is included in App.js. 
Also, so not to loose the thought, the script should update the projects.json 
file as well.

For now, I am going to generate initial content with html. This is for a 
couple of reasons. First, it gets me moving forward. Second, it is a great 
chance to refine my html skillset. Lastly, I am likely to learn something
that eventually I would apply later.

Where to next (MVP+1): There are a couple of different options, the first
would be to create the script mentioned above, this would take the markdown
and create static content in the website. A more fun thing to do might be to
have the content in a service which is queried by the application; in this case
a common component could be used to display all of the information.

## markdown notes, references, and other things to remember for later

### Showdown
Most of all content is generated using markdown via showdown
- showdownjs.com
- https://github.com/showdownjs/showdown/wiki

npm install showdown

- Usage:
  - npx showdown --help
    - npx is an npm command runner... otherwise one would have to use node node_modules/showdown/bin/showdown.js yuck...

### vsCode Markdown Fun
- https://code.visualstudio.com/Docs/languages/markdown#:~:text=VS%20Code%20supports%20Markdown%20files%20out%20of%20the,existing%20Markdown%20file%20and%20start%20working%20with%20it.

- Shortcuts
  - Switch between markdown view CTRL+Shift+V
  - Preview side by side CTRL+K V

### react-markdown 
A library for directly displaying markdown using React.
- Package: https://www.npmjs.com/package/react-markdown
- How To: https://jacobwicks.github.io/2020/06/19/rendering-markdown-and-resizing-images-with-react-markdown.html

Code snippet (this was committed to the repo):
```
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import markdown from './sample.md';

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
    <ReactMarkdown 
      transformImageUri={uri => uri.startsWith("http")? uri : `http://localhost:3000/${uri}`}>
      {displayText}
    </ReactMarkdown>
  );
}

export {Sample};
```


# References
[create-react-app](create-react-app.dev)
[MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

# Unit/System Testing 
- JEST: jestjs.io
- Included with react (don't try to install it again as it confuses things greatly requiring one to wipe out the NPM stuff and re-install)
- To run tests in terminal from root node directory:
  - npm run test
- To Debug in vscode
  - Open Debug Terminal 
  - Set the break point
  - From the terminal run the tests in watch mode (npm test --watch)
  - https://stackoverflow.com/questions/33247602/how-do-you-debug-jest-tests

# Pages
- Display navbar --> Content --> Footer
  - Content is created in markup then converted to html. It is displayed with
    the table of contents in a side bar (left).
    - Pre Processing via script : 
      - markdown to html using showdown
      - javascript containing two components (table of contents and the content)
        - table of contents is a list of all the heading elements in the content 
          with a link to the associated ID in the html
    - CSS - Stylize the TOC to be in the sidebar, same for all pages including projects
    - Bonus Points : In the TOC dynamically expand and collapse subheaders
    - Double Bonus Points: Retrieve content from the server instead of shipping it all
      statically.(is this even beneficial as the browser should fetch as needed 
      anyway...) MVP + 1
# Todo
  - Change page to path in projects.json
  - Bug: Changes to pages in projects.json are not
    noticed by the browser. However, changes to 
    topics are... weird...
  - Create a better Logo, make the favicon the same as the logo
  - Look into vulnerabilities identified when installing react. What are these
    and what should my level of concern be?
    npm audit
    nmp audit fix

