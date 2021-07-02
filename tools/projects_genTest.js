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
  if(undefined === nTopics || undefined === nProjects) {
    console.error('Error: nTopics and nProjects need to be defined');
    process.exit(1);
  }

  for(let t = 0; t < nTopics; t++) {
    let topic = {
      displayName: 'a' + t,
      displayDescription: 'b' + t,
      projects:[]
    };

    for(let p = 0; p < nProjects; p++ )
    {
      let project = {
        displayName: 'c' + t + p,
        displayDescription: 'd' + t + p,
        displayImage: 'e' + t + p,
        page: 'f' + t + p
      }
      topic.projects.push(project);
    }
    projects.topics.push(topic);
  }
  console.log( JSON.stringify(projects, null, 2) );
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




