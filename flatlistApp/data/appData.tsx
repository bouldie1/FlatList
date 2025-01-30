/*
    This file will include our dataTypes that ares used across multiple files.
    We can also declare arrays or other variables here
*/

type dataType = {
  id: string; // Unique identifier for each element in list
  title: string; // What I display
};

const DATA: dataType[] = [
  { id: "1", title: "First" },
  { id: "2", title: "Second" },
  { id: "3", title: "Third" },
  { id: "4", title: "Fourth" },
];

export {dataType, DATA}
