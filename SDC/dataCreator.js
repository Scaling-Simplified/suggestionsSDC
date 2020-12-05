const fs = require('fs');
const { argv } = require('yargs');

const lines = argv.lines || 1000;
const filename = argv.output || 'generatedData.csv';
const stream = fs.createWriteStream(filename);

const shoeSeries = ['Originals', 'Performance', 'Running', 'Hiking', 'Essentials', 'Lifestyle', 'Basketball', 'Workout', 'Gym', 'Clean Classics'];
const shoeTypes = ['NMD_R1 SHOES', 'ULTRABOOST SHOES', 'ULTRABOOST ST SHOES', 'ULTRABOOST DNA SHOES', 'ULTRABOOST WINTER.RDY SHOES', 'BUSENITZ PRO SHOES', 'NIZZA TREFOIL SHOES', 'ZX 2K BOOST SHOES', 'OZWEEGO SHOES', 'NMD_R1 V2 SHOES'];
const shoePrices = ['150', '140', '130', '180', '175', '200', '165', '155', '185', '220'];
const salePrices = ['112', '104', '85', '90', '110', '122', '131', '0', '0', '0', '0'];
const url = 'https://source.unsplash.com/1600x900/?adidas,shoes';

const createSuggestions = (shoeID) => {
  const suggestions = [];
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * 9);
    const newCollection = {
      shoeUrl: url,
      series: shoeSeries[(i + randomIndex) % 10],
      type: shoeTypes[(i + randomIndex) % 10],
      price: shoePrices[(i + randomIndex) % 10],
      salePrice: salePrices[(i + randomIndex) % 10],
    };
    suggestions.push(newCollection);
  }
  return suggestions;
};

const createData = (index) => {
  const suggestions = createSuggestions();
  let dataString = '';
  for (let i = 0; i < suggestions.length; i++) {
    const mainShoeID = index;
    const { shoeUrl } = suggestions[i];
    const { series } = suggestions[i];
    const { type } = suggestions[i];
    const { price } = suggestions[i];
    const { salePrice } = suggestions[i];

    dataString += `${mainShoeID},${shoeUrl},${series},${type},${price},${salePrice}\n`;
  }
  return dataString;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  const dataCount = lines + 1;
  function writing() {
    let canWrite = true;
    do {
      i--;
      const post = createData(dataCount - i);
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

startWriting(stream, 'utf-8', () => {
  stream.end();
});
