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
# To track large files
git lfs track "*.jpg"

# Make sure to include in git attributes
git add .gitattributes

# Just add and commit files as normally would there after
git add myfile.jpg
'''

# References
[create-react-app](create-react-app.dev)
[MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

# Todo
  - Create a better Logo, make the favicon the same as the logo
  - Look into vulnerabilities identified when installing react. What are these
    and what should my level of concern be?
    npm audit
    nmp audit fix

