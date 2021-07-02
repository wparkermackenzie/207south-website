/**********************************************************************************************************************
 * projects_genTest.js
 * W P Mackenzie 
 * 
 * Generates test data for projects.test.js
 * 
 * Yargs
 * =====
 * script.js [command] options
 * Allows the script to have a number of different commands, all with their own
 * options... similar to the git command line
 * References:
 * https://github.com/yargs/yargs/blob/master/docs/advanced.md
 * http://yargs.js.org/
 * https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
 **********************************************************************************************************************/

const yargs = require('yargs');

const nTopics_default = 3;
const nProjectsPerTopic_default = 3;

let projects = 
{
  'topics' : [

  ]
};

function handleGenerate(argv) {
  const nTopics = argv.topics;
  const nProjects = argv.projects;
  const strLenMax_nChars = 128;
  if(undefined === nTopics || undefined === nProjects) {
    console.error('Error: nTopics and nProjects need to be defined');
    process.exit(1);
  }

  for(let t = 0; t < nTopics; t++) {
    let tn = genString(strLenMax_nChars);
    let td = genString(strLenMax_nChars);
    let topic = {
      displayName: tn,
      displayDescription: td,
      projects:[]
    };

    for(let p = 0; p < nProjects; p++ )
    {
      let pn = genString(strLenMax_nChars);
      let pd = genString(strLenMax_nChars);
      let pi = genString(strLenMax_nChars);
      let pp = genString(strLenMax_nChars);
      let project = {
        displayName: pn,
        displayDescription: pd,
        displayImage: pi,
        page: pp
      }
      topic.projects.push(project);
    }
    projects.topics.push(topic);
  }
  
  test = `
  test('Projects: Happy Path', () => {
    const json = ${JSON.stringify(projects, null,2)};
    const projects = new Projects(json);
    let nEntries = 0;
    for(let entry of projects) {
      nEntries++;
      // find project here...loop through topics to find dn & dd 
      // loop through projects to find
      // >>> or already know order just fill it all in given 
      //     topicNo = nEntries
      expect(entry.description).toBe(projects.topics)

    }
  });
  `;

  //console.log( JSON.stringify(projects, null, 2) );
}

// Set a version of the program.
yargs.version('1.0.0');

// Create the command
yargs.command({
  // Use the command * or $0 to specify the command is a default command
  command: '*', //command: 'generate',
  showInHelp: true,
  builder: {
    topics: {
      describe: 'Specify the number of topics',
      type: 'number',
      default: nTopics_default
    },
    projects: {
      describe: 'Specify the number of projects',
      type: 'number',
      default: nProjectsPerTopic_default
    }
  },

  // Function Handler for the command
  handler: handleGenerate
  /*
  handler: (argv) => {
    console.log( `${argv.topics} ${argv.projects}`);
  }*/
  
})
.help()
.argv;

yargs.parse();

function genString(nCharsMax)
{
  let r='';
  const nChars = Math.floor(Math.random() * nCharsMax);
  for( let i = 0; i < nChars; i++) {
    c = String.fromCharCode(Math.floor(Math.random() * 95)+32);
    if( c === '"') {
      c = '\"';
    }
  }
  return(r);
}




