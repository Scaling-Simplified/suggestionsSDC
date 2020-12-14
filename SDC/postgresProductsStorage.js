/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
const fs = require('fs');
const { argv } = require('yargs');

const lines = argv.lines || 1000;
const filename = argv.output || 'generatedData.csv';
const start = argv.start || 1;
const stream = fs.createWriteStream(filename);

let counter = 0;

const createProducts = (index, max) => {
  let dataString = '';
  for (let i = 1; i <= 16; i++) {
    // dataString += `${index}, ${(((index - 1) * 16) % max) + i}\n`;
    dataString += `${index},${(counter % max) + 1}\n`;
    counter++;
  }
  return dataString;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  const dataCount = lines;
  function writing() {
    let canWrite = true;
    do {
      i--;
      const post = createProducts(dataCount - i + start - 1, lines);
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
  'url, series, type, price, salePrice\n', 'utf-8',
);
startWriting(stream, 'utf-8', () => {
  stream.end();
});
