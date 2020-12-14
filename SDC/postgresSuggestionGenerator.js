/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
const fs = require('fs');
const { argv } = require('yargs');

const lines = argv.lines || 1000;
const filename = argv.output || 'generatedData.csv';
const stream = fs.createWriteStream(filename);

const shoeSeries = ['Originals', 'Performance', 'Running', 'Hiking', 'Essentials', 'Lifestyle', 'Basketball', 'Workout', 'Gym', 'Clean Classics'];
const shoeTypes = ['NMD_R1 SHOES', 'ULTRABOOST SHOES', 'ULTRABOOST ST SHOES', 'ULTRABOOST DNA SHOES', 'ULTRABOOST WINTER.RDY SHOES', 'BUSENITZ PRO SHOES', 'NIZZA TREFOIL SHOES', 'ZX 2K BOOST SHOES', 'OZWEEGO SHOES', 'NMD_R1 V2 SHOES', 'Yeezy Powerphase', 'Futurecraft 4D', 'Yeezy Boost 350 V2', 'Superstar', 'Stan Smith'];
const shoePrices = ['150', '140', '130', '180', '175', '200', '165', '155', '185', '220'];
const salePrices = ['112', '104', '85', '90', '110', '122', '131', '0', '0', '0', '0'];
const bucketUrl = 'https://sdc-adidas.s3-us-west-1.amazonaws.com';

const urls = [];

for (let i = 1; i <= 200; i++) {
  const url = `${bucketUrl}/${i}.jpg`;
  urls.push(url);
}

const createSuggestions = () => {
  const suggestions = [];
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * 9);
    const newCollection = {
      shoeUrl: urls[(i + randomIndex) % urls.length],
      series: shoeSeries[(i + randomIndex) % shoeSeries.length],
      type: shoeTypes[(i + randomIndex) % shoeTypes.length],
      price: shoePrices[(i + randomIndex) % shoePrices.length],
      salePrice: salePrices[(i + randomIndex) % salePrices.length],
    };
    suggestions.push(newCollection);
  }
  return suggestions;
};

const createData = (index) => {
  const suggestions = createSuggestions();
  let dataString = '';
  for (let i = 0; i < suggestions.length; i++) {
    // const id = ((index - 1) * 16) + i + 1;
    const { shoeUrl } = suggestions[i];
    const { series } = suggestions[i];
    const { type } = suggestions[i];
    const { price } = suggestions[i];
    const { salePrice } = suggestions[i];

    dataString += `${shoeUrl},${series},${type},${price},${salePrice}\n`;
    // dataString += `${id},'${shoeUrl}','${series}','${type}',${price},${salePrice}\n`;
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

stream.write(
  'url, series, type, price, salePrice\n', 'utf-8',
);
startWriting(stream, 'utf-8', () => {
  stream.end();
});
