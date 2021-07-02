import { Projects, ProjectEntry } from "./projects.js";
test('ProjectEntry: Happy Path', () => {
  let json = {
    topicName : "ABCD",
    topicDescription: "EFGHI",
    displayName: "JKLMNO",
    displayDescription: "PQRSTU",
    displayImage: "VWXYZ",
    page: "12345"
  };

  let projectEntry = new ProjectEntry(json);
  expect(projectEntry.topicName).toBe('ABCD');
  expect(projectEntry.topicDescription).toBe('EFGHI');
  expect(projectEntry.name).toBe('JKLMNO');
  expect(projectEntry.description).toBe('PQRSTU');
  expect(projectEntry.image).toBe('VWXYZ');
  expect(projectEntry.page).toBe('12345');
});

test('ProjectEntry: Data Breaks', () => {
  let json = {
    topicName : "ABCD",
    topicDescription: "EFGHI",
    displayName: "JKLMNO",
    displayDescription: "PQRSTU",
    displayImage: "VWXYZ",
    page: "12345"
  };

  delete json.topicName;
  expect(new ProjectEntry(json).topicName).toBe(undefined);
  delete json.topicDescription;
  expect(new ProjectEntry().topicDescription).toBe(undefined);
  delete json.displayName;
  expect(new ProjectEntry().name).toBe(undefined);
  delete json.displayDescription;
  expect(new ProjectEntry().description).toBe(undefined);
  delete json.displayImage;
  expect(new ProjectEntry().image).toBe(undefined);
  delete json.page;
  expect(new ProjectEntry().page).toBe(undefined);
});

test('Projects: happy path iteration', () => {
  const json = {
    'topics' : [
      {
        'displayName': '012345678901234567890123456789012345678901234567890';
        'displayDescription' : 'qwertyuiop[]asdfghjkl;';
        'projects': [
          {
            'displayName': '  zxcv  d  ee ww e www ssds a d g h j k k s d v dekmfime dddkwi  wewewe  w',
            'displayDescription': '0plmnko09ijnbhu8  8uhbgye2 1 2 3 4 5 6 7 8 ygvcft65rdxs 3waq2',
            'displayImage': '1qazxsw2 3edc vfr4 55t gb nhyy5',
            'page': 'po/eer/ww2/332/112/332/1112/3332/eeed/ffee/ggr'
          },
          {
            'displayName': 'd  ee ww e www ssds a d g h j k k s d v dekmfime dddkwi  wewewe  w1qazx',
            'displayDescription': '8uhbgye2 1 2 3 4 5 6 7 8 ygvcft65rdxs 9ijnbh 3edcvf',
            'displayImage': '3edc vfr4 55t gb nhyy5 0okmnji9 23wesdxc',
            'page': '/ww2/332/112/332/1112/3332/eeed/ffee/ggr/9384'
          },
          {
            'displayName': 'ee ww e www ssds a d g h j k k s d v dekmfime dddkwi  wewewe  w1qazx',
            'displayDescription': '8uhbgye2 1 2 3 4 5 6 7 8 9ijnbh 3edcvf',
            'displayImage': '3edc 55t gb nhyy5 0okmnji9 23wesdxc',
            'page': '/ww2/332/112/1112/3332/eeed/ffee/ggr/9384'
          },
          {
            'displayName': 'ww e www ssds a h j k k s d v dekmfime dddkwi  wewewe  w1qazx',
            'displayDescription': '8uhbgye2 1 2 3 4 7 8 ygvcft65rdxs 9ijnbh 3edcvf',
            'displayImage': '3edc vfr4 55t gb nhyy5 23wesdxc',
            'page': '/ww2/332/112/332/1112/ffee/'
          },
          {
            'displayName': 'd  ee e www ssds g h j k k s d v wewewe  w1qazx',
            'displayDescription': '1 4 5 8 ygvcft65rdxs 9ijnbh 3edcvf',
            'displayImage': '3edc vfr4 nhyy5 23wesdxc',
            'page': '/ww2/332/112/332/ffee/ggr/9384'
          }
        ]
      },
      {
        'displayName': '01234567 8901234567890123456789012345678901234567890';
        'displayDescription' : 'qwertyuiop[]asdfghjkl;';
        'projects': [
          {
            'displayName': '  zxcv  d  ee ww e www ssds a d g h j k k s d v dekmfime dddkwi  wewewe  w',
            'displayDescription': '0plmnko09ijnbhu8  8uhbgye2 1 2 3 4 5 6 7 8 ygvcft65rdxs 3waq2',
            'displayImage': '1qazxsw2 3edc vfr4 55t gb nhyy5',
            'page': 'po/eer/ww2/332/112/332/1112/3332/eeed/ffee/ggr'
          },
          {
            'displayName': 'd  ee ww e www ssds a d g h j k k s d v dekmfime dddkwi  wewewe  w1qazx',
            'displayDescription': '8uhbgye2 1 2 3 4 5 6 7 8 ygvcft65rdxs 9ijnbh 3edcvf',
            'displayImage': '3edc vfr4 55t gb nhyy5 0okmnji9 23wesdxc',
            'page': '/ww2/332/112/332/1112/3332/eeed/ffee/ggr/9384'
          },
          {
            'displayName': 'ee ww e www ssds a d g h j k k s d v dekmfime dddkwi  wewewe  w1qazx',
            'displayDescription': '8uhbgye2 1 2 3 4 5 6 7 8 9ijnbh 3edcvf',
            'displayImage': '3edc 55t gb nhyy5 0okmnji9 23wesdxc',
            'page': '/ww2/332/112/1112/3332/eeed/ffee/ggr/9384'
          },
          {
            'displayName': 'ww e www ssds a h j k k s d v dekmfime dddkwi  wewewe  w1qazx',
            'displayDescription': '8uhbgye2 1 2 3 4 7 8 ygvcft65rdxs 9ijnbh 3edcvf',
            'displayImage': '3edc vfr4 55t gb nhyy5 23wesdxc',
            'page': '/ww2/332/112/332/1112/ffee/'
          },
          {
            'displayName': 'd  ee e www ssds g h j k k s d v wewewe  w1qazx',
            'displayDescription': '1 4 5 8 ygvcft65rdxs 9ijnbh 3edcvf',
            'displayImage': '3edc vfr4 nhyy5 23wesdxc',
            'page': '/ww2/332/112/332/ffee/ggr/9384'
          }
        ]
      }
    ]
  }
});

test('Projects: projects.json', () => {
  const projects = new Projects();
  let nEntries = 0;
  for(let entry of projects)
  {
    nEntries++;
    expect(entry.description).toBeDefined();
    expect(entry.image).toBeDefined();
    expect(entry.name).toBeDefined();
    expect(entry.page).toBeDefined();
    expect(entry.topicDescription).toBeDefined();
    expect(entry.topicName).toBeDefined();
  }
  expect(nEntries).toBe(6);
});
