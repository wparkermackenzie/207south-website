import jsonData from './projects.json'; 

// TBD UNIT Tests
// Validate file types for images

/**
 * Abstract the data from the main application. In this case the data is
 * static, small, and simple; as such, the data is stored is a simple json file 
 * which is brought down to the client on loading. 
 */

/**
 * Create a clear API which describes the available data associated with
 * a project. Not only does it describe a clear contract to the functionality
 * which uses it; it also creates a clear deliniation between the data 
 * and the API, allowing change on one side without consequence to the other.
 * This also allows for some testing which would get messy if placed directly 
 * into the application.
 */
class ProjectEntry {
  #topicName;
  #topicDescription;
  #name;
  #description;
  #image;
  #page;

  constructor(json) {
    this.#topicName = json?.topicName;
    this.#topicDescription = json?.topicDescription;
    this.#name = json?.displayName;
    this.#description = json?.displayDescription;
    this.#image = json?.displayImage;
    this.#page = json?.page;
  }

  get description() {return(this.#description);}
  get image(){return(this.#image);}
  get name() {return(this.#name);}
  get page(){return(this.#page);}
  get topicDescription() { return(this.#topicDescription);}
  get topicName() { return( this.#topicName);}

  toString() {
    return(
      `topic          : ${this.topicName} (${this.topicDescription})\n`   +
      `project        : ${this.name} (${this.description})\n`             +
      `image          : ${this.image}\n`                                  +
      `page           : ${this.page}\n`             
    );
  }
}

class Projects {
  #json = jsonData;

  constructor(json) {
    this.#json = (undefined === json) ? jsonData : json;
  }
  
  [Symbol.iterator]() {
    let topicIndex = 0;
    let topicName;
    let topicDescription;
    let projectIndex = 0;
    const nTopicEntries = () => this.#json.topics.length;
    const getNext = () => {
      if( topicIndex < nTopicEntries() ) {
        topicName = this.#json?.topics[topicIndex]?.displayName;
        topicDescription = this.#json?.topics[topicIndex]?.displayDescription;
        const nProjectEntries = () => 
          this.#json.topics[topicIndex].projects.length;
        if (projectIndex < nProjectEntries() ) {
          let j = this.#json.topics[topicIndex].projects[projectIndex++];
          j.topicName = topicName;
          j.topicDescription = topicDescription;
          let r = new ProjectEntry(j); 
          return ( { value: r, done: false} );
        }
        else {
          projectIndex = 0;
          return( getNext(++topicIndex, projectIndex));
        }
      }
      else {
        return ( { value: undefined, done: true }  );
      }
    };

    return (
      {
        next() {
          return(getNext());
        },
        return() {
          return ({ value: undefined, done: true });
        },
        [Symbol.iterator]() { return this; }
      }
    );
  }
}

export {Projects,ProjectEntry};