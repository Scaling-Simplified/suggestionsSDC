const mongoose = require('mongoose');
const Suggestion = require('../models/suggestion.js');

mongoose.connect('mongodb://127.0.0.1/suggestions', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

// const save = (data) => Suggestion.create(data);

const addNew = (suggestions, callback) => {
  Suggestion.findOne({}).sort('-shoeID').exec((err, count) => {
    if (err) {
      callback(err);
    } else {
      const newProduct = {
        shoeID: count.shoeID + 1,
        list: suggestions,
      };

      Suggestion.create(newProduct, (err) => {
        if (err) {
          callback(err);
        } else {
          callback();
        }
      });
    }
  });
};

const updateOne = (shoeid, content, callback) => {
  Suggestion.findOneAndUpdate({ shoeID: shoeid }, content, (err) => {
    if (err) {
      callback(err);
    } else {
      callback();
    }
  });
};

const deleteOne = (shoeid, callback) => {
  Suggestion.findOneAndDelete({
    shoeID: shoeid,
  }, (err) => {
    if (err) {
      callback(err);
    } else {
      callback();
    }
  });
};

const findRecord = (id) => Suggestion.find({ shoeID: id }).exec();

module.exports = {
  findRecord,
  addNew,
  updateOne,
  deleteOne,
};
