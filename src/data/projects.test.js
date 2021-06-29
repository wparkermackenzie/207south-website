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
