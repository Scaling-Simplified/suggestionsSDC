/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
const fs = require('fs');
const { argv } = require('yargs');

const lines = argv.lines || 1000;
const filename = argv.output || 'generatedData.csv';
const stream = fs.createWriteStream(filename);
let counter = 0;

const createSuggestions = (max) => {
  let suggestions = '';
  for (let i = 1; i <= 16; i++) {
    suggestions += `${(counter % max) + 1},`;
    counter++;
  }
  return suggestions;
};

const createData = (index, max) => {
  let suggestions = createSuggestions(max);
  suggestions = suggestions.slice(0, -1);
  let dataString = '';

  // const id = index;

  // dataString += `${id},"{${suggestions}}"\n`;
  dataString += `"{${suggestions}}"\n`;

  return dataString;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  const dataCount = lines;
  function writing() {
    let canWrite = true;
    do {
      i--;
      const post = createData(dataCount - i, lines);
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(post, encoding, done);
      } else {
        // we are not done so don't fire callback
        canWrite = writeStream.write(post, encoding);
      }
      // else call write and continue looping
    } while (i > 0 && canWrite);

    if (i > 0 && !canWrite) {
      // our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing();
};

stream.write(
  'suggestions\n', 'utf-8',
);
startWriting(stream, 'utf-8', () => {
  stream.end();
});
